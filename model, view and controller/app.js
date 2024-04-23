const path = require('path')
const http = require('http');
const express = require('express');
// const {engine} = require('express-handlebars');
const app= express();

// app.engine('hbs', engine({
//     layoutsDir: 'views/layouts/',
//     extname: "hbs",
//     defaultLayout: 'main-layout'
//   }));
app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRoutes);
app.use('/admin',adminRoutes);
// const server = http.createServer(app);
app.use(errorController.get404)
app.listen(3000);
