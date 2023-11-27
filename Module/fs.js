let fs = require ('fs')

fs.readFile('c:/Users/HUSSAIN/regnant_workspace/JS_WORKSPACE/Module/file4.js','utf8',function(err,data){

if (err){
     console.log(err)
}
else{
     console.log(data)
}
})   