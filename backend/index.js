const express = require('express');
const cors=require("cors");
require('dotenv').config();

const routes=require("./src/routes/main");
const user_routes=require("./src/routes/users");
const customer_routes=require("./src/routes/customers");
const loans_routes=require("./src/routes/loans");
const settings_routes=require("./src/routes/settings");
const audits_routes=require("./src/routes/audits");
const invoices_routes=require("./src/routes/invoices");
require('./src/configs/db')
const app=express();

app.use(cors())
 
app.use(express.json());

app.use('/',routes);
 app.use('/customer',customer_routes);
// app.use('/api/',routes);
// app.use('/api/',routes);

const port=process.env.PORT | 3000;

const MONGO_URI=process.env.MONGO_URI;

app.listen(port,()=>{
    console.log('server started on '+port)
})  