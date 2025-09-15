const express = require("express");
const {addToCart}  = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();

// Add product to cart
router.post("/add", protect ,addToCart);

module.exports = router;