// find duplicates in an array - O(1) space complexity

function findDuplicate(integers) {
  let possibleFloor = 1;
  let possibleCeiling = integers.length - 1;

  while(possibleFloor < possibleCeiling) {
    // create a midpoint
    let midpoint = Math.floor(possibleFloor + (possibleCeiling - possibleFloor) / 2);
    // floors and ceilings for lower and upper
    let lowerCeiling = midpoint;
    let lowerFloor = possibleFloor;
    let upperFloor = midpoint + 1;
    let upperCeiling = possibleCeiling
    // possible distinct integers in lower half
    let possibleIntegersLower = lowerCeiling - lowerFloor + 1;
    let itemsLower = 0;
    // loop to find everything through midpoint
    for (let i = 0; i < integers.length; i++){
      if (integers[i] >= lowerFloor && integers[i] <= lowerCeiling) {
        itemsLower++;
      }
    }

    // if lower length is greater than possibilities, then change possibleFloor and possibleCeiling to lower values
    // otherwise change to the upper floor and ceiling
    if (itemsLower > possibleIntegersLower) {
      possibleFloor = lowerFloor;
      possibleCeiling = lowerCeiling;
    } else {
      possibleFloor = upperFloor;
      possibleCeiling = upperCeiling;
    }
  }

  return possibleFloor;
}

// recursion would cause O(n) space complexity, must iterate