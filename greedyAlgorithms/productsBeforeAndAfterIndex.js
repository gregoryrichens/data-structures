function beforeAndAfter(array) {
  if (array.length < 2) { throw new Error('there must be at least two numbers to form a mathematical product') }
  // create an array where we will store product information
  let products = [];
  // iterate through the array to find the product of all numbers before a given index
  let productBefore = 1;
  let productAfter = 1;
  for (let i = 0; i < array.length; i++){
    products[i] = productBefore;
    productBefore *= array[i];
  }
  // iterate backwards, finding the product of everything after a given index
    // multiply this by whatever is at the same index in the product information array
  for (let j = array.length - 1; j >= 0; j--){
    products[j] = products[j] * productAfter;
    productAfter *= array[j];
  }
  // return product array
  return products;
}

let test1 = beforeAndAfter([1,2,3,4,5]);
// let test2 = beforeAndAfter([9]);
console.log(test1);