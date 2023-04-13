const { log, Console } = require('console');
var readlineSync = require('readline-sync');

//for loop
let printNamelen = readlineSync.questionInt("How many times want to print your name? ")
console.log(printNamelen)

for(var i =0;i<=printNamelen;i++){
console.log("* ".repeat(i))
  // for(var j= 0;j<=i;j++){
    
  // }
  
}