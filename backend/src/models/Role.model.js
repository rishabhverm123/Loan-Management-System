const mongoose=require('mongoose');

const roleSchema=mongoose.Schema({
    role:{
        type:String,
        requires:true
    }
},
{ // will add role
    timestamps:true    
}
);

module.exports=mongoose.model('Roles',roleSchema);