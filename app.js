const express = require('express');
const app =express();
const dotenv =require('dotenv');
const path =require('path');
const cors=require('cors');
const connectDatabase=require('./config/connectDatabase');
dotenv.config({path:path.join(__dirname,'config','config.env')})
const authRoute =require('./Routes/authRouter.js');
const dataRoute =require("./Routes/dataRouter.js");
const queryRoute =require("./Routes/queryRouter.js");
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

app.use('/api/auth',authRoute);
app.use('/api/auth',dataRoute);
app.use('/api/auth',queryRoute)


app.get("/"),(req,res)=>{
    res.send("Welcome to the Api")
}


app.listen(process.env.PORT,()=>{
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})