const express = require('express')
const router = express.Router()
const userRoutes = require('./routes/userRoutes')
const recipeRoutes = require('./routes/recipeRoutes')


router.use('/user',userRoutes);
router.use('/recipe',recipeRoutes);


module.exports = router;