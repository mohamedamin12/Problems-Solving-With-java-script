function isDivisible(n, x, y) {
  // if (n % x === 0 && n % y === 0) {
  //   return true;
  // }else {
  //   return false;
  // }
  return n % x === 0 && n % y === 0 ? true : false;
}

console.log(isDivisible(3,3,3));