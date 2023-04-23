const emptyArr = [];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 5];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//배열 추가
arr1.push(1, 2); // [1 ,2, 3, 4, 5, 1, 2] // 마지막에 추가함

arr1.unshift("a", "z"); // ["a", "z" ,1, 2, 3, 4, 5] 첫번째에 추가함

//배열 삭제
arr1.pop(); // [1, 2, 3, 4] //마지막 요소 삭제
arr2.shift(); // [2, 3, 4, 5] //첫번째 요소 삭제

// 배열 통합
arr1.concat(arr2); // [1,2,3,4,5,2,4,5]
arr1.join(); // 1,2,3,4,5
arr1.join(""); // 12345
arr1.join(", "); // 1, 2, 3, 4, 5

//배열 거꾸로
arr1.reverse(); // [5,4,3,2,1]

// 중간에 있는 값을 추출
// 슬라이스 함수는 시작점과 끝점을 인수로 받는다
arr1.slice(2, 6); // [3,4,5,6]

//중간에 있는 값을 삭제
arr3.splice(2, 3); // [1,2,6,7,8,9,10] --> 2번째 있는 배열부터 3개의 숫자를 삭제한다

//배열에서 특정값 찾기
arr3.find((x) => x === 3); // 실패시 undefined를

arr3.indexOf(3);

//배열 정렬하기
arr3.sort((a, b) => b - a); // 내림차순
arr3.sort((a, b) => a - b); // 오름차순

//배열의 합

arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0);

//문자열 거꾸로 정렬
let answer = array.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else return 0;
});
