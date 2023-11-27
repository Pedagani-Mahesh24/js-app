function Multiplywith2(arr){
     for (let i = 0;i<arr.length;i++ ){
     arr[i]=arr[i]*2;
 }
    return arr;
}
var arr = [12,3,56,4];
var result = Multiplywith2(arr);
console.log(result)