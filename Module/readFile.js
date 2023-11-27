const fs = require('fs')
fs.readFile('./Module/index.txt','utf8',(err,data)=>{ // Write a path name is Module.
     if (err){
          console.log(err)
     }else{
          console.log(data.toString())
     }
})

console.log('before reading')