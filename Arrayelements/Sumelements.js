function sumArray(arr){
     sum = 0;
     for (var i = 0; i < arr.length;i++){
          sum += arr[i];
     }
     return sum;
}
var data = [10,34,76,89];
var finalSum = sumArray(data);
console.log(finalSum);
