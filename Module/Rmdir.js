const fs = require('fs')

fs.rmdir('./index12.js',(err)=>{
     if (err){
          console.log('deletion of folder not success')
     }
     else{
          console.log('deletion of folder success')
     }
})