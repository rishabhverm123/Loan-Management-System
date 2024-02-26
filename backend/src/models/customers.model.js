const mongoose=require('mongoose');

const customerSchema=mongoose.Schema({
    firstName:String,
    lastname:String,
    emailAddress:String,
    phoneNumber:String,
    dob:String
});

module.exports=mongoose.model('Customers',customerSchema);