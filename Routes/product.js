const express = require('express');
const { getProducts, getSingleProducts, createProduct, addproduct } = require('../controllers/productcontroller');
const router =express.Router();

router.post('/createproduct',createProduct);
router.route('/product',getProducts);
router.post("/addproduct",addproduct);




module.exports =router;