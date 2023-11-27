var isEven = function(x,y){
     let sum = x*y;
     return sum;
}
function f1(){
     console.log("inside f1 function")
     return isEven;
}
function f2(){
     console.log("inside f2 function")
     return function(x,y){
          let sum = x+y;
          return sum;
     }
}
var evenfun = f1();
var r1 = evenfun(12,14)
console.log(r1);
var evenfun = f2();
var r2 = evenfun(9,12);
console.log(r2);