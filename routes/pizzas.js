const express = require('express')
const router = express.Router()
const pizzasController = require('../controllers/pizzas') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, pizzasController.getPizzas)

router.post('/createPizza', pizzasController.createPizza)

router.put('/deleteIngredient', pizzasController.deleteIngredient)

// router.put('/markComplete', pizzasController.markComplete)

// router.put('/markIncomplete', pizzasController.markIncomplete)

router.delete('/deletePizza', pizzasController.deletePizza)

module.exports = router