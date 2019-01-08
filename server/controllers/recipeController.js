const Recipe = require('../models/recipeModel');


module.exports = {
    createRecipe: (req,res,next) => {
        let imageUrl;
        if (req.file) {
            imageUrl = req.file.path;
        } 
        const name = req.body.name;
        const duration = req.body.duration;
        let ingredients;
        if(req.body.ingredients === ""){
            ingredients = []
        } else {
            ingredients = req.body.ingredients.split(",")
        }
        const creator = req.body.creator;
        const instructions = req.body.instructions
        const recipe = new Recipe({
            name: name,
            duration: duration,
            instructions:instructions,
            ingredients: ingredients,
            creator: creator,
            imageUrl: imageUrl
        });
        recipe.save()
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
            .populate('ingredients')
            .then(recipe => {
                res.status(200).json(recipe)
            })
    },
    updateRecipe: (req,res,next) => {
        const recipeId = req.params.recipeId
        Recipe.findOne({_id: recipeId})
            .then(recipe => {
                if(req.body.favoriteAmount){
                    recipe.favoriteAmount = req.body.favoriteAmount
                }
                recipe.ingredients = req.body.ingredients
                return recipe.save()
            })
            .then(recipe => {
                res.status(200).json(recipe)
            })
    }
}