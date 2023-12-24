const mongoose  = require("mongoose");
const express = require('express');
const cartSchema = require("../Schemas/cartSchema");

const CartItem = new mongoose.model("CartItems", cartSchema);
const router = express.Router();

router.post('/add-to-cart', async (req,res) => {
    const { email, productId, color, size } = req.body;

    try {
      // Check if the user's cart exists
      let cart = await CartItem.findOne({ email });
  
      if (!cart) {
        // If the user's cart doesn't exist, create a new cart
        cart = new CartItem({ email, items: [{productId, color, size}] });
      }else{
        const existingItem = cart.items.find((item) => item.productId === productId);
         // Check if the item is already in the cart
  
      if (existingItem) {
        // If the item is in the cart, update the quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add a new item
        cart.items.push({ productId, color, size });
      }
      }
      // Save the cart to the database
      await cart.save();
      res.status(200).json({ success: true, message: 'successfully product added to cart' });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  });

  router.get('/get-cart-items/:email', async (req, res) => {
    try {
      const email = req.params.email;
      const productsOfCart = await CartItem.findOne({email});
      if(productsOfCart){
        res.send({success: true, data: productsOfCart.items});
      }else{
        res.send({message: 'you do not add product to cart'})
      }
     
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
    
  })

module.exports = router;