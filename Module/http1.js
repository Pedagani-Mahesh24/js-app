const http = require('http')
const myserver = http.createServer((req,res)=>{
     res.write('content-txt'),
     res.end('Hello')
})

myserver.listen(5700,()=>{

     console.log('successfully running')
})