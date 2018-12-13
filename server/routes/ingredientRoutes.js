const ingredientController = require('../controllers/ingredientController')
const express = require('express');
const router = express.Router();

router.post('/',ingredientController.createIngredient)
router.get('/',ingredientController.getAllIngredients)

module.exports = router;