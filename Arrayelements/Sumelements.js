function Summary(arr){
     let sum = 0;
     for (var i = 0;i < arr.length; i ++){
          sum  += arr[i] ;

     }
     return sum;
}
var data = [17,56,78,67,89];
var result = Summary(data);
console.log(result);
