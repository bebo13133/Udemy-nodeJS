
const products =[]

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
    products.push({title: req.body.title})
    res.redirect('/')
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product<button/><form/>')
}