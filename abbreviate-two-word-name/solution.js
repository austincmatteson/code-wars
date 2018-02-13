function abbrevName(name){
  var names = name.split(" ");
  for (var i in names) {
    names[i] = names[i].charAt(0).toUpperCase();
  }
  return names.join('.');
}