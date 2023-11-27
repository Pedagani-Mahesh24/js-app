const express = require()

const app = express()
const PORT = 4000;

get.app('/person',(req,res,next)=>{
     let person = {name:'mahesh',address:'ghattuppal',id:3}
     res.sent(person);
})

app.listen(PORT,()=>{
     console.log('SERVER ON '+ PORT)
})