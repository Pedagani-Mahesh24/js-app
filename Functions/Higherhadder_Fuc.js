let f1 = function(fun,x,y){
     let result =  fun (x,y);
     return result;
}

let add = function (x,y){
     let sum = x+y;
     return sum;
}

let sub = function (x,y){
     let sub = x-y;
     return sub;
}

let mul = function (x,y){
     let sum  = x*y;
     return sum;
}

var result = f1(add,13,12)
console.log(result);
var result1 = f1(sub,12,6)
console.log(result1);
var result2 = f1(mul,12,5)
console.log(result2);
