const fs = require('fs')
fs.unlink('./Module/index12.js',(err)=>{ //delete only empty File.
     if (err){
          console.log('deleted not success')

     }
     else{
          console.log('deleted success')
     }
})