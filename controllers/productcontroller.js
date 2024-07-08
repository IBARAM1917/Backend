const productModel =require('../models/productModel')



//get products api - /api/auth/product
exports.getProducts= async (req,res,next)=>{

  const products= await productModel.find({});
 res.json({
    success:true,
     products
 })
}

//get single products api - /api/auth/product/:id
exports.getSingleProducts= async (req,res,next)=>{
    try{
 const product = await productModel.findById(req.params.id)
    res.json({
       success:true,
        product
    })
}catch (error){
    res.status(404).json({
        success:false,
         message:'Unable to get with that ID'
        })
}
   }