function uniqueValues(array) {
  if (array.length < 2) { return array.length }

  array.sort();

  let pointer1 = 0;
  let pointer2 = 1;

  let uniqueCount = 0;

  while (pointer2 <= array.length - 1) {
    if (array[pointer1] !== array[pointer2]) {
      pointer1++;
      array[pointer1] = array[pointer2];
    }
    pointer2++;
  }

  return pointer1 + 1;
}

console.log(uniqueValues([1,1,2,1]));