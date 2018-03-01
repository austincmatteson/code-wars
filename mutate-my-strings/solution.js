function mutateMyStrings(stringOne, stringTwo){
  let placeholder = stringOne + '\n';
  stringOne = stringOne.split('');
  for(let i in stringTwo) {
    if(stringOne[i] !== stringTwo.charAt(i)) {
      stringOne[i] = stringTwo.charAt(i);
      placeholder += stringOne.join('') + '\n';
    }
  }
  return placeholder;
}