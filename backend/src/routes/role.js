const express =require('express');

const Role=require('./../models/Role.model')

const router=express.Router();

router.post('/add',async (req,res,next)=>{

    try{
       
        if(req.body.role && req.body.role!==''){
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
});

router.get('/getAll',async (req,res)=>{
    try{
        const roles=await Role.find();

        return res.status(200).send(roles);
    }
    catch(err){
        return res.status(500).send("Internal Server Error");
    }
})

module.exports=router;