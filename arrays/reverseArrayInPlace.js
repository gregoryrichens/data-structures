function reverseArrayInPlace(array){
  debugger;
  let end = array.length - 1;
  let start = 0;
  let midpoint = Math.floor(array.length / 2);

  while (end !== midpoint && start !== midpoint) {
    [array[start], array[end]] = [array[end], array[start]];
    end--;
    start++;
  }

  if (end !== start) {
    [array[start], array[end]] = [array[end], array[start]];
  }

  return array;
}

// alternative solution
function reverseArrayInPlaceAlt(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }

  return array;
}

// console.log(reverseArrayInPlace(['p','l','e','a','s','e']));
// console.log(reverseArrayInPlace(['p','l','a','t','e']));