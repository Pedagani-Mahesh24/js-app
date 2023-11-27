const _ = require ('lodash') 

const chunk  = _.difference ([2,1],[2,3]);

console.log(chunk);  //Output [1]


// compact Array falsy values removed falsy values are:  0,false,null,"",undefined,NAN.

const Arr = require('lodash');

const chunk1 = Arr.compact ([0,1,false,2,'',3])

console.log(chunk1); // Output 1,2,3.

// differenceby Array return first array second element.

var fetchdata = require('lodash');

var chunk2 = fetchdata.differenceBy([2.1,1.2],[2.3,3.4],Math.floor); //Output is [1.2]

const chunk3 = fetchdata.differenceBy([{'x':2},{'x':1}],[{'x':1}],'x');//Output is [{x:2}]

console.log(chunk2);
console.log(chunk3);

// differenceWith invoked compare of two elements values and array.

const object = [{'x':1,'y':2},{'x':2,'y':1}]

var chunk4 =_.differenceWith(object,[{'x':1,'y':2}],_.isEqual);

console.log(chunk4);  //Output is [{x:2, y:1}]

//PULL removed the all Given values in Array.

var Array = ['a','b','c','a','b','c'];

var chunk5 = _.pull(Array,'b','c')

console.log(chunk5);  //Output ['a','a']

// Chunk array enter any values and taken 4 numbers gives 4 array elements.

const split = require('lodash')

const manu = [1,2,3,4,5,6,7,8,9];

const chunkarray = split.chunk(manu,4);

console.log(chunkarray);   //Output [[1,2,3,4],[5,6,7,8],[9]].


//sampleSize means removes the enter element.

const  f1 = require('lodash');

const result = f1.sampleSize([1, 2, 3],2);

console.log(result)  // Output is [1,3].
 
const result1=f1.sampleSize([1, 2, 3], 4);

console.log(result1); // Output is [3,1,2]


//Concat array means sequance of numbers element.

const numbers1 = [1,2,3,5,7,8];

const modifiedArray = _.concat(numbers1,[9,10]);

console.log(modifiedArray);  // Output [1,2,3,5,7,8,9,10]

// drop means removes the first two elements.

const numbers = [1,2,4,6,7,9];

const modified = _.drop(numbers,2);

console.log(modified);  //  Output : [4,6,7,9]

// dropright means removes the right side elements.

const number = [1,2,5,7,8,9];

const fetch = _.dropRight(number,3);

console.log(fetch);  //Output [1,2,5]

//Join means taken any '_',num,vars anything output will be taken value.

const num = [1,3,5,7,6,2];

const Tech = _.join(num,'-');

console.log(Tech);// Output: 1-3-5-7-6-2.