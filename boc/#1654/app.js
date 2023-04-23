var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [K, N] = input.shift().split(" ").map(Number);
const inputK = K;
const inputN = N;
const testCase = input;
// 총 N개의 랜선을 만들어야함
// 이미 K개의 랜선을 갖고 있는데, K개의 랜선은 길이가 재각각임
// 예를들어 300cm짜리를 140cm로 잘라내면 20cm의 랜선은 버려야함
// [457, 539, 743, 802]

function solution(K, N, testCase) {
  const cables = testCase.map(Number).sort((a, b) => a - b);
  let left = 0;
  let right = cables[cables.length - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // console.log(mid);
    const sum = cables.reduce((acc, cable) => acc + Math.floor(cable / mid), 0);
    if (sum >= N) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(right);
  return right;
}
solution(inputK, inputN, testCase);
