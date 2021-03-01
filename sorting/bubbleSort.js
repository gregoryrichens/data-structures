const bubbleSort = function(array) {

  for (let i = 0; i < array.length; i++){
    // array.length - 1 would work, but would take longer than needed. Not optimized
    // array.length - 1 - i works because we are always bubbling up the largest
    // remaining number in each pass
    for (let j = 0; j < array.length - 1; j++){
      if (array[j] > array[j + 1]) {
        let tempValue = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempValue;
      }
    }
  }

  return array;
}

function bubbleSortPractice(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length - 1 - i; j++){
      if(array[j+1] < array[j]) { [array[j],array[j+1]] = [array[j+1],array[j]] }
    }
  }

  return array;
}
