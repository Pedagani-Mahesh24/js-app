const fs = require('fs')

fs.readFile('./data.js','utf8',(err,data)=>{
if (err){
     console.log(err)
}
console.log(data)
})