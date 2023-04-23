var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N] = input.shift();
const inputN = +N;
const sum = +input.pop();
const testCase = input;
// N개의 지방이 존재함
// sum이 주어지고, N의 합은 sum을 넘을 순 없음

function solution(N, initialSum, testCase) {
  console.log("initialSum : " + initialSum);
  const budgets = testCase[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let sum = 0;

  let left = 1;
  let right = budgets[budgets.length - 1];
  while (left < right) {
    // console.log("left : " + left + "right : " + right);
    let mid = Math.floor((left + right) / 2);
    let newBudgets = budgets.map((budget) => {
      if (budget > right) {
        return right;
      } else {
        return budget;
      }
    });
    sum = newBudgets.reduce((acc, budget) => acc + budget, 0);
    console.log(sum);
    if (sum >= initialSum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    return left;
  }

  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2);
  // }

  // const cables = testCase.map(Number).sort((a, b) => a - b);
  // let left = 0;
  // let right = cables[cables.length - 1];
  // while (left <= right) {
  //   const mid = Math.floor((left + right) / 2);
  //   // console.log(mid);
  //   sum = cables.reduce((acc, cable) => acc + Math.floor(cable / mid), 0);
  //   if (sum >= N) {
  //     left = mid + 1;
  //   } else {
  //     right = mid - 1;
  //   }
  // }
  // console.log(right);
  // return right;
}
solution(inputN, sum, testCase);
