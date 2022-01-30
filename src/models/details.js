const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    myname:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
       
    },
    ypass:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        
    },
    company:{
        type:String,
        
    },
    skill:{
        type:String,
        required:true
    },

})

const Detail = new mongoose.model("Detail",detailsSchema);
module.exports = Detail;