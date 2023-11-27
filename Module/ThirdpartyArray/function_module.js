let _=require('lodash')

let sum = _.map(['2','4','6','8'],_.unary(parseInt))

console.log(sum)  // Output will be come same element values : [2,4,6,8]

 // function after wait milliseconds. Any arguments gives to the function
 
let num = require('lodash')

let invoke = _.delay(function(text){

},1000,'later');

console.log(invoke);

