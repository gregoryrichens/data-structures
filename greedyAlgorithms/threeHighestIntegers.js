function threeHighestIntegers(array) {
  // track highest two
  // track highest three
  // track highest
  // track lowest two
  // track lowest
  let highestTwo = array[0] * array[1];
  let lowestTwo = array[0] * array[1];
  let highest = Math.max(array[0], array[1]);
  let lowest = Math.min(array[0], array[1]);
  let highestThree = array[0] * array[1] * array[2];

  // iterate through the array
  for (let i = 2; i < array.length; i++) {
    let current = array [i];
    //if current times top 2 is higher than top 3 new top 3
    highestThree = Math.max(highestThree, current * highestTwo, current * lowestTwo);
    // if current times highest is higher than top 2 - new top 2
    highestTwo = Math.max(highestTwo, current * highest, current * lowest);
    // if current times lowest is lower than bottom 2 - new bottom 2
    lowestTwo = Math.min(lowestTwo, current * highest, current * lowest);
    // if current is higher than highest new highest
    highest = Math.max(highest, current);
    // if current is lower than lowest new lowest
    lowest = Math.max(lowest, current);
  }

  return highestThree;
}

let product = threeHighestIntegers([1,2,3,4,5,6]);
let product2 = threeHighestIntegers([1,2,3,4,5,6,-7,-8,-1]);
let product3 = threeHighestIntegers([-1,-2,-3,-4,-5]);

console.log(product, product2, product3);