const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema({
  pizza: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pizza', PizzaSchema)
