const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = 4000 || 7000;

// express app initialization
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lcblope.mongodb.net/mobiles?retryWrites=true&w=majority`

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