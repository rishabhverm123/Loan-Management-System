const express = require('express');

 const routes=express.Router();

routes.get('/',(req,res)=>{
    res.send("this is message from route");
});

module.exports=routes;