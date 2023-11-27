function largestNumInArr(arr){
     var max = arr[0];
     for(var index = 0;index <arr.length;index++){
          if(arr[index] > max) {
               max = arr [index];
          }
     }
     return max;
}
var data = [10,34,56,78,13,9,7,11];
var result = largestNumInArr(data);
console.log(result);