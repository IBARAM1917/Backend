const mongoose = require("mongoose");

const schemaData =new mongoose.Schema({
    name:{
        type:String,
      
    },
    email:{
        type:String,
      
    },
    mobile:{
        type:String,
      
    },
    category:{
        type:String,
     
    },
    Title:{
        type:String,
       
    },
    discription:{
        type:String,
      
    },
    
    status:{
        type:String,
        default:"Open",
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
},{
    timestamps:true
})

const Data =mongoose.model("Data",schemaData);
module.exports=Data;