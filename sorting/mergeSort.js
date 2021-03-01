// need to subdivide array until it is empty or only has one value
// then we merge the array

// assume the input arrays are sorted
function mergeHelper(arr1, arr2) {
  // new array for merged values
  let mergedArray = [];
  //track array lengths
  let countOne = 0;
  let countTwo = 0;
  // when one is empty merge the sorted array with the new array
  while (countOne < arr1.length && countTwo < arr2.length) {
    if (arr1[countOne] < arr2[countTwo]) {
      mergedArray.push(arr1[countOne]);
      countOne++;
    } else {
      mergedArray.push(arr2[countTwo]);
      countTwo++;
    }
  }

  // determine which array is left
  if (countOne < arr1.length) {
    mergedArray = mergedArray.concat(arr1.slice(countOne));
  } else {
    mergedArray = mergedArray.concat(arr2.slice(countTwo));
  }

  // return new array
  return mergedArray;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midpoint = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midpoint));
  let right = mergeSort(array.slice(midpoint));

  return mergeHelper(left, right);
}


function merge(arr1, arr2) {
  let mergedArray = [];
  let countOne = 0;
  let countTwo = 0;
  while(countOne < arr1.length && countTwo < arr2.length) {
    if(arr1[countOne] < arr2[countTwo]) {
      mergedArray.push(arr1[countOne]);
      countOne++;
    } else {
      mergedArray.push(arr2[countTwo]);
      countTwo++;
    }
  }

  while (countOne < arr1.length) {
    mergedArray.push(arr1[countOne]);
    countOne++;
  }
  while (countTwo < arr2.length) {
    mergedArray.push(arr2[countTwo]);
    countTwo++;
  }

  return mergedArray;
}

function mergeSortPractice(array) {
  if(array.length <= 1) { return array }
  let midpoint = Math.floor(array.length / 2);

  let left = mergeSortPractice(array.slice(0, midpoint));
  let right = mergeSortPractice(midpoint);

  return merge(left,right);
}

