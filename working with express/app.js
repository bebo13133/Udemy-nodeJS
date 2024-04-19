const path = require('path')
const http = require('http');
const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRoutes);

app.use('/admin',adminData.routes);
// const server = http.createServer(app);
app.use((req, res,next)=>{
res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
})
app.listen(3000);
