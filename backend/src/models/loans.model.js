const mongoose=require('mongoose');

const loanSchema=mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:Number,
    loanIssueDate:Date,
    LoanStatus:String
});

module.exports=mongoose.model('Loans',loanSchema);