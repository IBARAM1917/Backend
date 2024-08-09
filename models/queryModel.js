const mongoose = require("mongoose");

const queryschema =new mongoose.Schema({
    name:{
        type:String,
      
    },
    email:{
        type:String,
      
    },
    query:{
        type:String,
    }
},{
    timestamps:true
})

const Query =mongoose.model("Query",queryschema);
module.exports=Query;