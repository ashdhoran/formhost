const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
   


})

const Register =new mongoose.model("Register",loginSchema);
module.exports=Register;


