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

// listening server
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})