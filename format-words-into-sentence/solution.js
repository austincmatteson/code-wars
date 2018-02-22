function formatWords(words){
  if(words === null) {
    return "";
  }
  words = words.filter(Boolean);
  if(words.length > 1) {
    let b = words.pop();
    return words.join(', ') + ' and ' + b;
  } else {
    return words.join();
  }
}