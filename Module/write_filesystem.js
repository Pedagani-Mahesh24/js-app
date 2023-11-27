const fs = require('fs')
fs.writeFile('./data','adding extra',(err)=>{ //any file already created and not, add something
     if (err){
          console.log('write file not found');
     }else{
          console.log('write successfully')
     }
})