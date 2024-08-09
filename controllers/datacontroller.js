const Data = require ("../models/schemaData");
const { errorHandler } = require("../Utils/error.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const data = async(req,res)=>{
    const data=await Data.find({})
    res.json({success:true,data:data})
}

const create =async(req,res)=>{
    console.log(req.body);
    const datas = new Data(req.body)
    await datas.save()
    res.send({success:true ,message:"data save successfully",datas:datas})
}


const update =async(req,res)=>{
    console.log(req.body);
    const {id,...rest}=req.body
    console.log(rest);
   const data= await Data.updateOne({_id:req.body.id},rest)
   res.send({success:true,message:"data update successfully",data:data})
}
 
const delet = async (req,res)=>{
    const id = req.id
    console.log(id);
    const data =await Data.deleteOne({_id:id})
    res.send({success:true,message:"data find successfully",data:data})
}

module.exports = {data,create,update,delet};