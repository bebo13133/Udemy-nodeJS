const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path')
router.get('/add-product',(req,res,next)=> {
    // console.log("In another middleware!")
    res.sendFile(path.join(rootDir,'views', 'add-product.html'));
})
router.post('/add-product',(req,res,next)=> {
    console.log(req.body)
    res.redirect('/')
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product<button/><form/>')
})
module.exports = router