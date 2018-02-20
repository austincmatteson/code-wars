function isNice(arr) {
  var answer = false
  for(var i in arr) {
    if(arr.includes(arr[i] + 1) || arr.includes(arr[i] -1)) {
      answer = true;
    } else {
      answer = false;
      break;
    }
  }
  return answer;
}