const url = require('url');

const address = 'http://localhost:4000/index.txt?name-mahesh&age=24';

const part = url.parse(address,true);

console.log(part.host);               //local  host:4000
console.log(part.pathname);          //index.txt
console.log(part.search);           //?name-mahesh&age=24
console.log(part.port);            // 4000
console.log(part.parse)           //[Function: parse]
console.log(part.slashes)        //true
console.log(part.href)          // http://loaclhost:4000/index.txt?name-mahesh&age=24
console.log(part.protocol)     // http:
