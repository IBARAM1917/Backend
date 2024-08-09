const express = require('express');
const {  createquery } = require('../controllers/queryControllers');



const router =express.Router();
 


router.post('/createquery',createquery);


module.exports=router;