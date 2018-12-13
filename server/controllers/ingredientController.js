const Ingredient = require('../models/ingredientModel')

module.exports = {
    createIngredient : (req,res,next) => {
        const name = req.body.name;
        const recipe = req.body.recipe;
        const ingredient = new Ingredient({
            name: name,
            recipe: recipe
        })
        ingredient.save()
            .then((ingredient) => {
                res.status(201).json(ingredient)
            })
            .catch(err => {
                console.log(err)
                if(!err.statusCode){
                    err.statusCode = 500;
                }
                next(err)
            })
    },
    getAllIngredients : (req,res,next) => {
        Ingredient.find()
            .then(ingredients => {
                res.status(200).json(ingredients)
            })
            .catch(err => {
                console.log(err)
                if(!err.statusCode){
                    err.statusCode = 500;
                }
                next(err)
            })
    }
}