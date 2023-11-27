// function fetchData(callback) {
//   setTimeout(function() {
//     var data = "This is the fetched data";
//     callback(data);
//   }, 1000);
// }

// function processData(data) {
//   console.log("Processing data: " + data);
// }

// fetchData(processData);

function fetchdata(callback){
  
  console.log('hello how are you')
  //callback()
}

function variables(passedfunction){
  console.log('I am fine');
   passedfunction()
}

variables(fetchdata)