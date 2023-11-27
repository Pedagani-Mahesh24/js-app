function Multiplywith2(arr){
     for (var i =0;i<arr.length;i++){
     arr[i] = arr[i] * 2;
}
return arr;

}
var arr = [2,5,8,12];
var result = Multiplywith2(arr);
console.log(result)