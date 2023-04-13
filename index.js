var readlineSync = require('readline-sync');

var score = 0;
//Input
var yourAge = readlineSync.question('Am i older than 25 ? ');
console.log(yourAge);
//processing
if (yourAge === "yes") {
  //output
  console.log("you are right.")
  score = score + 1;
  console.log("your score is " + score);
}
else {
  //output
  console.log("you are wrong.")
  score = score - 1;
  console.log("your score is " + score);
}