const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  price: {
    type: Number,
    required: true,
  },
  description: String,
  category: String,
  inStock: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
