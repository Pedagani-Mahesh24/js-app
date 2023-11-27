function add(x,y){
    console.log(x+y)
}

function  product(a,b){
     console.log(a*b)
}

function calculator(name1,name2,operation){ //One function passed to another function argument that is call back function.
  operation (name1,name2)
     product(15,8);
}
calculator (12,5,add)
calculator (4,5,product);