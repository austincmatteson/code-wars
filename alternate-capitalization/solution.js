function capitalize(s){
  var a = [];
  var str = "";
  var str2 = "";
  for (var i = 0; i < s.length; i++) {
     str += i % 2 === 0 ? s.charAt(i).toUpperCase() : s.charAt(i);
     str2 += i % 2 === 1 ? s.charAt(i).toUpperCase() : s.charAt(i);
  }
  a.push(str, str2);
  return a;
};