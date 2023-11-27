// partition of Collection elements return gives taken related values.

var _ =require('lodash');

var data = _.partition([2,1,3,4,5,7,8,9],n=>n%3==0);

console.log(data); //Output Even[1,2,4,5,7,8],[3,9]

// filter means return the taken above values come.

var data = require('lodash');
var user = [{name:1,age:24},
     {name:2,age:27},
     {name:3,age:28},
     {name:4,age:22},
]

var fil =_.filter(user,user=>user.age>24);
console.log(fil);  //Output [{name:2,age:27},{name:3,age :28}]

// Map means taken any square elements multiply with that value. 

let num =require('lodash')
function square(n){
     return n*n;
}

let result= _.map([2,8,5],square);
console.log(result);   //Output [4,64,25]

//Some means return the truthy values.

let num1 = require('lodash');

let size = _.some([null,0,'yes',false],Boolean);

console.log(size)  //Output : true



