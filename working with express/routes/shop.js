const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')
const adminData = require('./admin')
router.get('/',(req,res,next)=> {
    // console.log("In another middleware!")
    console.log(adminData.products)
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports = router