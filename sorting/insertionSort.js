function insertionSort(array) {
  // there is one portion of the array that we consider sorted
  // the second half of the array is unsorted
  // slowly move through the unsorted portion, expanding the sorted portion
  for (let i = 1; i < array.length; i++){
    for (let j = i - 1; j > -1; j--){
      if(array[j + 1] < array[j]) {
        let tempValue = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempValue;
      }
    }
  }

  return array;
}

// this uses es6 way of moving values around

// function insertionSortTwo (array) {
//   for (let i = 1; i < array.length; i++){
//     for (let j = i - 1; j > -1; j--){
//       if (array[j + 1] < array[j]) {
//         [array[j + 1], array[j]] = [array[j], array[j + 1]];
//       }
//     }
//   }

//   return array;
// }

function insertionSort(array) {
  for (let i = 1; i < array.length; i++){
    for (let j = i - 1; j > -1; j--){
      if (array[j + 1] < array[j]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}

function thisIsHowYouDoInsertionSort(array) {
  for (let i = 1; i < array.length; i++){
    for (let j = i - 1; j > -1; j--){
      if(array[j+1] < array[j]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }

  return array;
}
