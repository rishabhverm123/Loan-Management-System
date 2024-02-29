const express =require('express');

const Role=require('./../models/Role.model')

const router=express.Router();

router.post('/add',async (req,res,next)=>{
    debugger;
    console.log(req.body)
    try{
       
        if(req.body.role && req.body.role!==''){
            console.log("AAgya")
            const newRole=new Role(req.body);
           await newRole.save();
           return res.status(200).send("Role Created");
        }
        else{
            return res.status(500).send("Bad Request");
        }
    }
    catch(ex){
        return res.status(500).send("Internal Server Error");
    }
})

module.exports=router;