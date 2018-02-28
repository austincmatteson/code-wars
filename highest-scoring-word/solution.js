function high(x){
  x = x.split(' ');
  let highScore = 0;
  let result = "";
  for(let i in x) {
    let word = x[i];
    let value = 0;
    for(let z in word) {
      value += word.charCodeAt(z) - 96;
    }
    if(value > highScore) {
      highScore = value;
      result = word;
    }
  }
  return result;
}