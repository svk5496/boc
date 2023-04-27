var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, M, V] = input.shift().split(" ").map(Number);
//첫째 줄에 정점의 개수
const inputN = N;
// 간선의 개수
const inputM = M;
// 탐색을 시작할 정점의 번호
const inputV = V;

const testCase = input.map((item) => {
  return item.split(" ").map(Number);
});

function solution(n, m, v, testCase) {
  // 노드만큼의 배열을 만든다
  const graph = Array.from(Array(n + 1), () => []);
  // test case만큼 graph에 넣기
  for (const [src, dest] of testCase) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const dfs = (start) => {
    const stack = [start];
    const visited = Array(N + 1).fill(false);
    const order = [];
    while (stack.length) {
      const node = stack.pop();
      if (!visited[node]) {
        visited[node] = true;
        order.push(node);
        stack.push(...graph[node]);
      }
    }
    return order.join(" ");
  };

  const bfs = (start) => {
    const queue = [start];
    const visited = Array(N + 1).fill(false);
    const order = [];
    while (queue.length) {
      const node = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        order.push(node);
        queue.push(...graph[node]);
      }
    }
    return order.join(" ");
  };

  graph.forEach((v) => v.sort((a, b) => b - a));
  console.log(dfs(V));

  graph.forEach((v) => v.sort((a, b) => a - b));
  console.log(bfs(V));
}
solution(inputN, inputM, inputV, testCase);
