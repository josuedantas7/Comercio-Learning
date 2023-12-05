const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  disponivel: {
    type: Boolean,
    default: true,
  },
})

module.exports = Product