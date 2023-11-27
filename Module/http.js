var http = require ('http')
let myserver=http.createServer((req,res)=> {
     
     res.writeHead(299,{
          "content-type":"text/plain"
     })
     res.write('welcome to server')
     res.end("Hello world")
})
myserver.listen(7776,()=>{ 
     console.log('successfully')
})