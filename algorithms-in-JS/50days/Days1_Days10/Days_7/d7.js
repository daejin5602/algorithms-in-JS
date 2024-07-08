function solution(array,height){
  let count = 0;
  for(i of array){
    if(i>height){
      count+=1;
    }
  }
  return count;
}

function solution(array,height){
  return array.filter(v=>v>height).length; // length를 통해 배열의 길이(요소의 개수) 반환
}

