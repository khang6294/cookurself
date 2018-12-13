const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    recipe:[
        {
            type: Schema.Types.ObjectId,
            ref:'Recipe',
            required: true
        }
    ]
})

module.exports = mongoose.model('Ingredient', ingredientSchema)