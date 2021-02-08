function capitalizeFirst (array, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (index === array.length) { return array }
  array[index] = array[index][0].toUpperCase() + array[index].slice(1);
  return capitalizeFirst(array, index + 1);
}