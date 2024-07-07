// solution 1 
function solution(n) {
    for(let i =2 ; i<=n ; i+=2)
      answer += i;
    return answer;
}

// solution 2 
function solution(n){
  var half = Math.floor(n / 2);
  return half * (half + 1); // 수학적계산
}

// solution 3 
function solution(n) {
  return Array(n) // 배열 함수 계산
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((acc, cur) => acc + cur , 0);
}