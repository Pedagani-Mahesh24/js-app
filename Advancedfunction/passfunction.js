function  f1(fun, x,y){
     let sum = fun (x,y);
     return sum;
}
var add = function (x,y){
     var  sum = x+y;
     return sum;
     
}
var sub = function (x,y){
     var sum = x-y;
     return sum;

}
var result = f1(add,4,5);
console.log(result);
var result1 = f1(sub,9,2);
console.log(result1);