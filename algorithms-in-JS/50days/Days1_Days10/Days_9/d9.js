function solution(n){
  if (n/7== ~~(n/7)){
    return n/7;
  }
  return ~~(n/7)+1;
}

function solution(n){
  return Math.ceil(n/7);
}