const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = 4000 || 7000;

// import routing file
const productRouter = require('./routes/product.route')
// express app initialization
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// telling express use these router file
app.use(productRouter);

// mongodb uri
let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lcblope.mongodb.net/mobiles?retryWrites=true&w=majority`

// connectDB is a function that connect mongodb database
async function connectDB () {
    try{
       await mongoose.connect(uri)
       console.log('database connection successfull')
    }
    catch{
        console.error('Error connecting to MongoDB:', error);
    }
}
connectDB();
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// listening server
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})