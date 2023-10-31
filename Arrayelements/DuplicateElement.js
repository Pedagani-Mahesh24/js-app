function getDuplicate(arr){
     let duplicateArr = [];
     for (var index = 0;index < arr.length;index++){
          for (var j = index + 1;i < arr.length; j++){
               if (arr[index] == arr[j]){
                    y = arr[index];
                    duplicateArr.push(y);
               }
          }
     }
     return duplicateArr;
}
var data = [10,34,56,78,11,9,9,11];
var result = getDuplicate(data);
console.log(result);