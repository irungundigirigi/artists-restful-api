const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const apiroutes = require('./src/controllers/artists.controllers.js');
const artists = require('./src/model/artists')

let PORT = process.env.PORT || 3007

//load middleware
app.use(cors());
app.use(express.json());
app.use('/', apiroutes)

app.listen(PORT, ()=>{
    console.log(`App is running at http://localhost:${PORT}`)
})