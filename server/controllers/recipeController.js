const Recipe = require('../models/recipeModel');


module.exports = {
    createRecipe: (req,res,next) => {
        Recipe.create(req.body)
            .then(recipe => {
                res.status(201).json(recipe)
            })
            .catch(err => {
                console.log(err)
                if(!err.statusCode){
                    err.statusCode = 500;
                }
                next(err)
            })
    },
    getAllRecipes: (req,res,next) => {
        Recipe.find()
            .then(recipes => {
                res.status(200).json(recipes)
            })
    },
    getRecipe: (req,res,next) => {
        const recipeId = req.params.recipeId
        Recipe.findOne({_id: recipeId})
            .then(recipe => {
                res.status(200).json(recipe)
            })
    }
}