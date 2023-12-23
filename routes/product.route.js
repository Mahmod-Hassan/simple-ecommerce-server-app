const mongoose  = require("mongoose");
const productSchema = require("../Schemas/productSchema");
const express = require('express');

const Products = new mongoose.model("Products", productSchema);
const router = express.Router();

router.get('/products', async (req, res) => {
   try {
     const products = await Products.find();
     if(products){
      res.status(200).send(products)
     }else{
      res.status(404).send({
        message: 'products not found'
      })
     }
   } catch (error) {
       res.status(500).send({message: error.message})
   }
})
router.get('/products/:id', async (req, res) => {
  const id = req.params.id;
   try {
    const product = await Products.findOne({_id: id});
    if(product){
      res.status(200).send(product)
     }else{
      res.status(404).send({
        message: 'product not found'
      })
     }
   } catch (error) {
    res.status(500).send({message: error.message})
   }
})
module.exports = router;