function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  // track the sum
  let sum = 0;
  // iterate over object
  for (let key in obj) {
      if(typeof obj[key] === 'number' && obj[key] % 2 === 0) { sum += obj[key] }
      if(typeof obj[key] === 'object') {sum += nestedEvenSum(obj[key])}
  }
    // if it's a number add it to the sum
    // if it's an object recursive sum is added to sum
  // return the sum
  return sum;
}