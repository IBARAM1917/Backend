
const { errorHandler } = require("../Utils/error.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Query = require("../models/queryModel.js");
dotenv.config();



const createquery =async(req,res)=>{
    console.log(req.body);
    const data =new Query(req.body)
    await data.save()
    res.send({success:true,message:"query save successfully",data:data})
    console.log(data);
}

module.exports ={createquery}