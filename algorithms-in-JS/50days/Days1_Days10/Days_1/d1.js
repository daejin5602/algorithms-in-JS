// Q1(Quotient) - solution 1 
function solution(num1,num2) {
  var answer = 0;
  return Math.floor(num1/num2);
}

// Q1 - solution 2
function solution(num1,num2) {
  var answer = ~~(num1/num2); // 보수로 해결
  return answer;
}

// Q2(compare_number) - solution 1 
function solution(num1,num2) {
    var answer = 0;
    return num1 === num2 ? 1 : -1;
}

// Q2 - solution 2 
function solution(num1,num2) {
    if(num1 === num2) {
      answer = 1;
    }
    else
    {
      answer = -1;
    }
    return answer;
}