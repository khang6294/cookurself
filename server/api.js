const express = require('express')
const router = express.Router()
const userRoutes = require('./routes/userRoutes')
const recipeRoutes = require('./routes/recipeRoutes')
const ingredientRoutes = require('./routes/ingredientRoutes')

router.use('/user',userRoutes);
router.use('/recipe',recipeRoutes);
router.use('/ingredient',ingredientRoutes)


module.exports = router;