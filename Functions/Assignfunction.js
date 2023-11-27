 let f1 = function (fun,x,y){
     let result =  fun (x, y);
     return result;
}

var add = function(x,y){
     let sum = x+y;
     return sum;
}

var sub = function (x,y){
     let sum = x-y;
     return sum;
}
var div = function (x , y){
     let sum = x/y;
     return sum;
}
var result = f1(add,10,13);
console.log(result);
var result1 = f1(sub,18,12);
console.log(result1);
var result2 = f1(div,100,5);
console.log(result2);