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
    type: Number,
    required: false
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pizza', PizzaSchema)
