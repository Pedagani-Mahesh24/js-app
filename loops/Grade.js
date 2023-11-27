function number(n){
if (n<33){
     console.log ('you are failed');
} else if (n<= 40){
     console.log ("your grade:D");
}else if (n<=50){
     console.log("your grade:C");
}else if (n<=60){
     console.log("your grade:B");
}else if (n<=70){
     console.log("your grade:A");
}else if (n<=80){
     console.log("your grade:A+");
}else if (n<=100){
     console.log("your grade:Golden A+");
}else {
     console.log("Invailed Number");
}
return "you entered:" +n;
}
const MyNumber = number (35);
console.log (MyNumber);