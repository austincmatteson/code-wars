function cubeOdd(arr) {
  console.log(arr);
  if(arr.every(x => x % 2 === 0)) {return undefined};
  return arr.every(x => typeof x !== 'string') ? arr.filter(x => x % 2 === 1 || x % 2 === -1).map(x => x * x * x).reduce((x,i) => x + i) : undefined;
}