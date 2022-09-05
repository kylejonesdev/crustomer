const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema({
  pizza: {
    type: String,
    required: true,
  },
  toppings: {
    type: Array,
    default: [],
    required: false
  },
  price: {
    type: String,
    required: false
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pizza', PizzaSchema)
