// brute force - does not minimize space complexity
var quicksort = function(array) {
  if (!Array.isArray(array)) { return null; }
  if (array.length < 2) {
    return array;
  } else if (array.length > 1) {
    let midpoint = Math.floor(Math.random() * array.length);
    let lowArray = [];
    let highArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[midpoint]) {
        lowArray.push(array[i]);
      } else if (array[i] > array[midpoint]) { // this is unnecessary
        highArray.push(array[i]);
      }
    }
    return quicksort(lowArray).concat(array[midpoint], quicksort(highArray));
  }
};

// modifies the array in place and returns the index of the pivot
function pivotFinder(array, start = 0, end = array.length -1){
  let pivot = array[start];
  let switchIndex = start;

  for (let i = start + 1; i <= end; i++){
    if (array[i] < pivot) {
      switchIndex++;
      [array[switchIndex], array[i]] = [array[i], array[switchIndex]];
    }
  }
  [array[start], array[switchIndex]] = [array[switchIndex], array[start]];
  return switchIndex;
}

// this modifies the array in place, so it reduces space complexity
function quickSort(array, left = 0, right = array.length - 1) {
  // if left is greater than right then we have multiple elements in the array and want to sort them
  if (left < right) {
    let pivotIndex = pivotFinder(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  //else array is 1 or 0 and it doesn't need to be sorted
  return array;
}

function partitioner(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let switchIndex = start;

  for (let i = 1; i <= end; i++){
    if(array[i] < pivot) {
      switchIndex++;
      [array[switchIndex], array[i]] = [array[i], array[switchIndex]];
    }
  }

  [array[start], array[switchIndex]] = [array[switchIndex], array[start]];
  return switchIndex;
}

function thisIsHowYouDoQuickSort(array, left=0, right=array.length - 1) {
  if (left < right) {
    let pivotIndex = partitioner(array);
    thisIsHowYouDoQuickSort(array, left, pivotIndex - 1);
    thisIsHowYouDoQuickSort(array, pivotIndex + 1, right);
  }

  return array;
}

