const {mongoose,Schema}=require('mongoose');

const userSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    username:{
        type:String,
        unique:true,
        required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    profileImage:{
        type:String,
        required:false,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    roles:{
        type:[Schema.Types.ObjectId],
        required:true,
        ref:'Roles'
    }
},
{ // will add role
    timestamps:true    
}
);

module.exports=mongoose.model('Users',userSchema);