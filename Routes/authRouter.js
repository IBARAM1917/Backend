const express = require('express');
const {  RegisterUser, loginUser, google } =require('../controllers/authControllers');



const router = express.Router();

router.post("/register-user",RegisterUser)
router.post("/login-user",loginUser)
router.post('/google',google)



module.exports=router;