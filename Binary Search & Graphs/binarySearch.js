// performs a binary search on a sorted list

function binarySearchRecursive(target, list) {
  if (list.length < 2) { return list[0] }

  let startIndex = Math.floor(list.length / 2);

  if (list[startIndex] === target) {
    return list[startIndex];
  } else if (target < list[startIndex]) {
    return binarySearch(target, list.slice(0, startIndex));
  } else if (target > list[startIndex]) {
    return binarySearch(target, list.slice(startIndex + 1));
  } else {
    return null;
  }
}

function binarySearchIterative(target, list) {
  let startIndex = 0;
  let endIndex = list.length - 1;

  while (endIndex >= startIndex) {
    let middleIndex = Math.floor((endIndex + startIndex)/2);
    if (target === list[middleIndex]) {
      return middleIndex;
    } else if (target > list[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if (target < list[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }

  return null;
}