const express = require('express');
const { data, create, update, delet} = require('../controllers/datacontroller');



const router =express.Router();
 

router.get("/data",data);
router.post("/create",create);
router.put("/update",update);
router.post('/delete/id',delet);



module.exports=router;