const express = require('express');
const app =express();
const dotenv =require('dotenv');
const path =require('path');
const cors=require('cors');
const connectDatabase=require('./config/connectDatabase');
dotenv.config({path:path.join(__dirname,'config','config.env')})
const authRoute =require('./Routes/authRouter.js')

const products =require('./Routes/product');
const orders =require('./Routes/order');

connectDatabase ();


app.use(express.json());

//error handler

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500 ;
    const message =err.message || 'Internal Server Error';
    res.status(statuscode).json({
      success:false,
      statuscode,
      message,

    });
})




app.use(cors({
    origin:"*",
    credentials:true,
}));
app.use('/api/auth/',products);
app.use('/api/auth/',orders);
app.use('/api/auth',authRoute)



app.get("/"),(req,res)=>{
    res.send("Welcome to the Api")
}

app.listen(process.env.PORT,()=>{
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})