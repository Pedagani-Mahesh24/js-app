function fun(name){
     return name;
}

function f1(a,b){
     var sum = a+b;
     return sum;
}

function f2(a,b){
     var sub = a-b;
     return sub;
}

function f3(x,y){
     var mul = x*y;
     return mul;
}

function f4(c,d){
     var div = c/d;
     return div;
}

module.exports = {
     "fun":fun,
     "f1":f1,
     "f2":f2,
     "f3":f3,
     "f4":f4,
}