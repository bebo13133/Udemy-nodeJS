
const Product = require('../models/product') 

exports.getAddProduct=(req,res,next)=> {
    // console.log("In another middleware!")
    res.render('add-product', {pageTitle: 'Add Product',
     path:'/admin/add-product',
     activeAddProduct:true,
     formsCSS:true,
     productCSS:true
    })
}
exports.postAddProduct = (req,res,next)=> {
const product = new Product(req.body.title)
product.save();
    res.redirect('/')
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product<button/><form/>')
}

exports.getProducts=(req,res,next)=> {
    // console.log("In another middleware!")
  const products = Product.fetchAll()
res.render('shop', {
    prods:products,pageTitle:'Shop', 
    path:'/', 
    hasProducts: products.length>0,
    activeShop:true,
    productCSS:true
})
}