function insertDash(num) {
  var number = num.toString();
  number = number.split('');
  for (var i= 0; i < number.length; i++) {
    if((parseInt(number[i]) % 2 === 1) && (parseInt(number[(i+1)]) % 2 === 1)) {
      number.splice(i + 1, 0, '-');
      i++;
    }
  }
  return number.join('');
}