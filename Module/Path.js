const f1 = require('path')

console.log(f1.parse(__filename))

console.log(f1.extname(__filename))

console.log(f1.basename(__filename))

console.log(f1.dirname(__filename))

console.log(f1.join(__filename))

console.log(f1.normalize(__filename))
