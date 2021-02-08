function productOfArray(array, carryover = 1) {
  if (array.length === 1) { return array[0] * carryover }
  return productOfArray(array.slice(1), carryover * array[0]);
}