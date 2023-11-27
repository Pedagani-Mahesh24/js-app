function f1(fun,x,y){
     let result =fun(x,y);
     return result;
}
var add = function (x,y){
     let  sum = x+y;
     return sum;

}
var sub = function (x,y){
     let sum = x-y;
     return sum;
}
var Div = function (x,y){
     let sum = x/y;
     return sum;
}
var result= f1(add,23,12);
console.log(result);
var result1 = f1(sub,12,9);
console.log(result1);
var result2 = f1(Div,45,9);
console.log(result2)