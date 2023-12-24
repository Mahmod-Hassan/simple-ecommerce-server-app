const mongoose  = require("mongoose");
const express = require('express');
const cartSchema = require("../Schemas/cartSchema");

const CartItems = new mongoose.model("CartItems", cartSchema);
const router = express.Router();

router.post('/add-to-cart', async (req,res) => {
    const { userEmail, productId } = req.body;
    try {
      // Check if the item is already in the cart
      let cartItem = await CartItems.findOne({ userEmail, productId });
  
      if (cartItem) {
        // If the item is in the cart, update the quantity
        cartItem.quantity += 1;
        const result = await cartItem.save();
        res.status(200).json({ success: true, message: 'Item added to cart successfully.', data:result });
      } else {
        // If the item is not in the cart, create a new cart item
        cartItem = new CartItems(req.body);
        const result = await cartItem.save();
        res.status(200).json({ success: true, message: 'Item added to cart successfully.', data:result });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  });

module.exports = router;