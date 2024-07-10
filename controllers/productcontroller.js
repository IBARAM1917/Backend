const productModel =require('../models/productModel')



//get products api - /api/auth/product
exports.getProducts= async (req,res,next)=>{
  try{
    const productdetails= await productModel.find({});
    res.send(productdetails);
  }catch(error){
    next(error)
  }
}


 exports.createProduct =  async (req,res,next) =>{
    const {name,image,description,price}=req.body;
    try{
        const newproduct = new  product({
            name,image,description,price
        });
        await newproduct.save();
        res
        .status(200)
        .json({message:" products created Successfully",result:newCourse});
    }catch(error){
        next(error);
    }
   }
   
   exports.addproduct = async (req,res,next) =>{
    const userid = req.params.id;
    try{
        const cuser = await productModel.findById(userid);
        cuser.products =[
            ...cuser.products,
            ...req.params.products,
        ] ;
        await cuser.save();
        const user1 =await  productModel.findById(userid).populate("products");
        user1.save();
        const {password:passkey ,...rest} =user1.doc;
        console.log(user1);;
        res
        .status(200)
        .json({message:"Products added Successfuly",rest});
    }catch(error){
        next(error)
    }
   }
   




 