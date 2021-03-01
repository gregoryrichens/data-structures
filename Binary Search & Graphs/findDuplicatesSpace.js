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

function findDuplicateSpacePractice(integers) {
  // there is a lowest possible number
  let floor = 1;
  // there is a highest possible number
  let ceiling = integers.length - 1;

  while (floor < ceiling) {
    // we can create a midpoint
    let midpoint = Math.min((ceiling - floor) / 2 + floor);
    // create a lower floor and ceiling
    let lowerFloor = floor;
    let lowerCeiling = midpoint;
    // create an upper floor and ceiling
    let upperFloor = midpoint + 1;
    let upperCeiling = ceiling;

    let lowerCount = 0;
    let possibleLower = lowerCeiling - lowerFloor + 1;
    // loop through array and increment a count each time something is in the lower half
    for (let i = 0; i < integers.length; i++){
      if (integers[i] >= lowerFloor && integers[i] <= lowerCeiling) {
        lowerCount++;
      }
    }
    // if the lower half is greater than the possible number in lower half
      // change the possible ceiling to the lower half ceiling
    // otherwise (upper half is larger) change possible floor to upper floor
    // this will continue as long as lowest possible is less than highest possible
      // once this is no longer true, we will just have an array of duplicates - the floor will be our duplicate
    if (lowerCount > possibleLower) {
      floor = lowerFloor;
      ceiling = lowerCeiling;
    } else {
      floor = upperFloor;
      ceiling = upperCeiling;
    }
  }

  return floor;
}