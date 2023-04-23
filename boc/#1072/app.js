var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("./input.txt").toString().trim();

const testCase = input;
// N개의 지방이 존재함
// sum이 주어지고, N의 합은 sum을 넘을 순 없음

function solution(testCase) {
  let [played, win] = testCase.split(" ").map(Number);
  let winRate = Math.floor((win * 100) / played);
  const z = winRate;
  let count = 0;
  console.log(winRate);

  if (winRate >= 99) {
    count = -1;
  } else {
    while (winRate === z) {
      winRate = Math.floor(((win + 1) * 100) / (played + 1));
      count = count + 1;
      played = played + 1;
      win = win + 1;
    }
  }
  console.log(count);
  return count;
}
solution(testCase);
