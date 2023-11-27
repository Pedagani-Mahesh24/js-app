function getnumberofzeros(arr){
     var count = 0;
     for (i = 0; i < arr.length; i++){
          if (arr[i] == 0){
               count++;
          }
     }
     return count;
}
var data = [12,13,0,12,89,0,9,0,34,0,8,90,];
var result = getnumberofzeros(data);
console.log(result);