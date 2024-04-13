const http = require('http')


const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers)
    // process.exit()
    const url = req.url
    if(url === '/'){
                                
    }
res.setHeader('Content-Type', 'text/html')

});
server.listen(3000);