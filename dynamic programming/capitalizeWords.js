function capitalizeWords (arr, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (index === arr.length) { return arr }
  arr[index] = arr[index].toUpperCase();
  return capitalizeWords(arr, index + 1);
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']