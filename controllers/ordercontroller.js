const orderModel =require('../models/orderModel');


exports.createOrder= async (req,res,next)=>{
   // console.log(req.body,"Data");
const cartItems =req.body;
const amount = Number(cartItems.reduce((acc,item)=>(acc +item.product.price * item.qty),0)).toFixed(2);
const status ="pending";
//console.log(amount,"Amount");

const order= await orderModel.create(cartItems,amount,status)


    res.json({
       success:true,
       order
    })
   }