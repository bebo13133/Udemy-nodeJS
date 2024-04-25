const Product = require('../models/product');



exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Product list',
      path: '/',

    });
  });
};
exports.getIndex= (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'All products',
      path: '/products',

    });
  });
}
exports.getCart= (req, res, next) => {
  res.render('shop/cart', {
    path:'/cart',
    pageTitle: 'Your cart',

  })
}
exports.getCheckout= (req, res, next)=>{
  res.render('shop/checkout', {
    path:'/checkout',
    pageTitle: 'Checkout',
  })
}