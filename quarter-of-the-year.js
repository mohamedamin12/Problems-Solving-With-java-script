const quarterOf = (month) => {
  // Your code here
  // if(month < 4){
  //   return 1;
  // }else if(month < 7){
  //   return 2;
  // }else if(month < 10){
  //   return 3;
  // }else{
  //   return 4;
  // }

  return Math.ceil(month / 3);
}

console.log(quarterOf(5))

