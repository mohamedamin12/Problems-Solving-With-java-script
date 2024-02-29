function invert(array) {
  return array.map( num => num === 0 ? num : -num);
}


// const invert = array => array.map(num => -num);
console.log(invert([1, -2, -3, 4, 5]));