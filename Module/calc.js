function sub(x,y){
     var sum = x-y
     return sum;
}

function mul(x,y){
     var mul = x*y
     return mul;
}

function add(x,y){
     var add=  x+y;
     return add;

}
function calculator(fun,x,y){
     if(fun == 'add');
     var result = sub(x,y);
     return result;
} 

let r1 = calculator(sub,13,8)
console.log(r1)
let r2= calculator(mul,12,4)
console.log(r2)
let r3 = calculator(add,12,9)
console.log(r3)

module.exports=calculator