let fs = require('fs')

fs.mkdir('./test1',(err)=>{
     if(err){
          console.log('creation of folder not success')
     }
     else{
          console.log('creation of folder success' )
     }
})