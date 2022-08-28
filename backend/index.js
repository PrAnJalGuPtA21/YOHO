require("dotenv").config;
const express = require("express");
const app=express();
const mongoose = require("mongoose");
const port=8083;
require("./db/conn")
const cors=require('cors')
const users = require('./models/userSchema')
const router=require('./routes/router')
app.use(express.json());


app.use(router);
app.use(cors())
app.use(express.json());

app.get('/', (request, response) => { response.send('I love Treehouse!'); });
app.listen(port,()=>{
    console.log(`${port}`)
})


