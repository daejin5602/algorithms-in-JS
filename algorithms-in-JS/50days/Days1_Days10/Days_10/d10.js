function solution(num_list){
  var answer = [0,0];
  for(item of num_list){
    if(item % 2 == 0){
      answer[0] += 1;
    }
    else {
      answer[1]+=1;
    }
  }
  return answer;
}

function solution(num_list){
  var answer = [0,0];
  for(item of num_list){
      answer[item % 2] += 1;
    }

  return answer;
}