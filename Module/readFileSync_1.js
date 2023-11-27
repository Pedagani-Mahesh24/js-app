let  fs = require('fs')
let data = fs.readFileSync('./module/index.txt') 

console.log(data.toString());

console.log('before reading')