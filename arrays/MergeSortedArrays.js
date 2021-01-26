function mergeSortedArrays(arr1, arr2) {
  let returnArray = [];
  let countOne = 0;
  let countTwo = 0;

  while (countOne < arr1.length && countTwo < arr2.length) {
    if (arr1[countOne] < arr2[countTwo]) {
      returnArray.push (arr1[countOne]);
      countOne++;
    } else {
      returnArray.push (arr2[countTwo]);
      countTwo++;
    }
  }

  while (countOne < arr1.length) {
    returnArray.push (arr1[countOne]);
    countOne++;
  }
  while (countTwo < arr2.length) {
    returnArray.push (arr2[countTwo]);
    countTwo++;
  }

  return returnArray;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

let sortedArray = mergeSortedArrays(myArray, alicesArray);

console.log(sortedArray);