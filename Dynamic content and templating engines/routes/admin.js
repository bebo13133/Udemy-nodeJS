const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path')

const products =[]

router.get('/add-product',(req,res,next)=> {
    // console.log("In another middleware!")
    res.render('add-product', {pageTitle: 'Add Product'})
})
router.post('/add-product',(req,res,next)=> {
    products.push({title: req.body.title})
    res.redirect('/')
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product<button/><form/>')
})
exports.routes = router
exports.products = products;