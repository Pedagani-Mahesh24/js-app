const http = require('http')
const fs = require('fs')
const url = require('url')
const calc=require('./calc');

http.createServer(function(req,res){

     let requrl = req.url
     console.log('received cuccessfully',requrl);

     if(requrl.includes('index')){

     fs.readFile('./Module/index.txt','utf8',function(err,data){
          res.writeHead(200, {'content-type':'text/index'})
          res.write(data)
         return res.end()
     })
 }
     else if(requrl.includes('http')){
     fs.readFile ('./Module/http.js','utf8',function(err,data){
          res.writeHead(200,{'content-type':'text/http' })
          res.write(data);
         return res.end()
     })
 }
     else if (requrl.includes('calc')){
          let query = url.parse(req.url,true).query;
          let queryJson = JSON.stringify(query);
          let queryJsonObj = JSON.parse(queryJson);

          var result = calc(JSONparse.operation,parseInt(JSONparse.x),parseInt(JSONparse.y));
          console.log(result);
          res.writeHead(200,{'content-type':'application/json'})
          let response = JSON.stringify({'result':result})
          res.write(response);
          return res.end()

     }
     

}).listen(7777);
