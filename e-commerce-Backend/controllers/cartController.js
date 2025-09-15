const Cart = require("../models/Cart");

 const addToCart = async (req, res) => {
  // Safe check: req.user null toh nahi?
  if(!req.user || !req.user._id){
    return res.status(401).json({success: false, message: "Unauthorized: User not found" });
  }
  const userId = req.user._id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      // check if product already in cart
      const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        // already in cart, update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // not in cart, push new item
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
    } else {
      // new cart
      cart = await Cart.create({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    }

    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};

module.exports = { addToCart };