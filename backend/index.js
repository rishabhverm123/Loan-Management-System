const express = require('express');
const cors=require("cors");
require('dotenv').config();
const routes=require("./src/routes/main")

const app=express();

app.use(cors())

app.use(express.json());

app.use('',routes);

const port=process.env.PORT | 5556;

const MONGO_URI=process.env.MONGO_URI

app.listen(port,()=>{
    console.log('server started on '+port)
})