const express = require('express');
const Customer=require('./../models/customers.model');

 const routes=express.Router();

routes.get('/',(req,res)=>{
    res.send("this is message from customer route");
});

routes.post('/add',async(req,res)=>{
    const customer = new Customer(req.body);
    let result=await customer.save();
    res.send(result); 
});
routes.get('/getAll',async(req,res)=>{
    try {
        // Fetch all users from the database
        const customers = await Customer.find();
    
        // Send the users as a response
        res.json(customers);
      } catch (error) {
        // If an error occurs, send an error response
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
});


module.exports=routes;