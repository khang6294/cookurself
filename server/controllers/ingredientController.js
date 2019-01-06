const Ingredient = require('../models/ingredientModel')

module.exports = {
    createIngredient : (req,res,next) => {
        const newIngredient = req.body.ingredients.map(ingredient => {
            return {
                name:ingredient
            }
        })

        Ingredient.collection.insert(newIngredient, onInsert);
        function onInsert(err, docs) {
            if (err) {
                console.log(err)
                    if(!err.statusCode){
                        err.statusCode = 500;
                    }
                next(err)
            } else {
                console.info('%d Ingredient were successfully stored.', docs);
                let newIngredientIds = docs.ops.map(ingredient => ingredient._id)
                res.status(201).json(newIngredientIds)
            }
        }
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