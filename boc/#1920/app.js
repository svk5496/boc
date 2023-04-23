var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("./input.txt").toString().split(" ");
console.log(input);
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
