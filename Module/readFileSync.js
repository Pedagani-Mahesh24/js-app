const fs = require('fs')

let data = fs.readFileSync("./Module/index.txt");
console.log(data.toString())

console.log('before reading')