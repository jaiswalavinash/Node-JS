const http = require('http')
const Server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hello World</h1>")
    res.end()
})
Server.listen(3000,()=>{
    console.log("Server is Listening")
})