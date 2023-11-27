 let _ = require('lodash');

 let fun = _.isInteger(3.2);
 let fun1 = _.toInteger(Number.MIN_VALUE);
 let fun2 = _.toInteger(Infinity);
 let fun3 = _.toInteger('3.2');

 console.log(fun);
 console.log(fun1);
 console.log(fun2);
 console.log(fun3); // Output : false, 0,1.7976931348623157e+308,3.

let fetchdata = require('lodash');

let sum = fetchdata.toString(null);
let sum1 = fetchdata.toString(-0);
let sum2 = fetchdata.toString([1,2,3])

console.log(sum);
console.log(sum1);
console.log(sum2);  // Output : -0,. 1,2,3.

let Arr = require('lodash')
let Array =Arr.toArray({'a':1,'b':2})
console.log(Array)

let Array1 = Arr.toArray('abc');
console.log(Array1)

let Array2 = Arr.toArray(1);
console.log(Array2)

let Array3 = Arr.toArray(null);
console.log(Array3);  //Output : [1,2].['a','b','c'].[].[].