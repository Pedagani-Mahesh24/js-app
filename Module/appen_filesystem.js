const fs = require('fs')

fs.appendFile('index4.js','adding extra',(err)=>{
     if (err){
          console.log('file not found')
     }else{
          console.log('file found')
     }
})
console.log('before running')