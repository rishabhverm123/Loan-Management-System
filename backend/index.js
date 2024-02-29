const express = require('express');
const cors=require("cors");
require('dotenv').config();

const roleRoute=require('./src/routes/role')




require('./src/configs/db')
const app=express();

app.use(cors())

app.use("/api/role",roleRoute);
 
app.use(express.json());

const port=process.env.PORT | 3000;

const MONGO_URI=process.env.MONGO_URI;

app.listen(port,()=>{
    console.log('server started on '+port)
})  