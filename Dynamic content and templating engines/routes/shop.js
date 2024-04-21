const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')
const adminData = require('./admin')
router.get('/',(req,res,next)=> {
    // console.log("In another middleware!")
    const products = adminData.products
res.render('shop', {prods:products,pageTitle:'Shop', path:'/'})
})

module.exports = router