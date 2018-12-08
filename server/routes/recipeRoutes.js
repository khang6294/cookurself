const recipeController = require('../controllers/recipeController')
const express = require('express');
const router = express.Router();

router.post('/',recipeController.createRecipe)
router.get('/',recipeController.getAllRecipes)
router.get('/:recipeId',recipeController.getRecipe)

module.exports = router;