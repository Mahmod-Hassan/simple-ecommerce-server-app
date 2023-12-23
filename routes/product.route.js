const mongoose  = require("mongoose");
const productSchema = require("../Schemas/productSchema");
const express = require('express');

const Product = new mongoose.model("Products", productSchema);
const router = express.Router();

router.get('/products', async (req, res) => {
   try {
     const products = await Product.find();
     if(products){
      res.status(200).send(products)
     }else{
      res.status(404).send({
        message: 'products not found'
      })
     }
     res.send(products)
   } catch (error) {
       res.status(500).send({message: error.message})
   }
})

module.exports = router;