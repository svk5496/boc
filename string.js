const string = "abcdefg";

//문자열 자르기
//앞에서부터 자르기 +를 이용
string.slice(2, 4); // c,d --> 2번째부터 4번째까지.
string.slice(-1, -3); // f,g --> 마지박부터 2개

// 특정 문자열 생성하기
const startText = "*".repeat(5); // "*****"

// 문자열 하나씩 쪼개기
const n = "wefawggg";
const nString = [...n]; // ["w","e","f","a","w","g","g","g"]
