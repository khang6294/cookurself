const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref:'Ingredient',
            required: true
        }
    ],
    creator: {
        type: Schema.Types.ObjectId,
        ref:'User',
    },
    introduction:{
        type: String,
    },
    course: {
        type: String,
    },
    occasion: {
        type: String,
    },
    cuisine: {
        type: String,
    },
    specialDiet:{
        type: String
    },
    imageUrl:{
        type:String,
    }
})

module.exports = mongoose.model('Recipe',recipeSchema);