const express = require('express');
const cors=require("cors");

const routes=require("./src/routes/main")

const app=express();

app.use(cors())

app.use(express.json());

app.use('',routes);


app.listen(process.env.PORT | 5556,()=>{
    console.log('server started on '+(process.env.PORT | 5556))
})