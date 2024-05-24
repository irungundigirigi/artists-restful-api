const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const router = require('./routes/index.js');

let PORT = process.env.PORT || 3007

//load middleware
app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`App is running at http://localhost:${PORT}`)
})