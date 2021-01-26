function CheckCakeOrders(takeOut, dineIn, served) {
  // move through served from beginning
  // keep track of where we are in the takeout and dinein orders
  // the array item should match the index we are at in one of the arrays
  let outIndex = 0;
  let takeOutMaxIndex = takeOut.length - 1;
  let inIndex = 0;
  let dineInMaxIndex = dineIn.length - 1;
  for (let i = 0; i < served.length; i++){
    if (outIndex <= takeOutMaxIndex && served[i] === takeOut[outIndex]) {
      outIndex++;
      continue;
    } else if (inIndex <= dineInMaxIndex && served[i] === dineIn[inIndex]) {
      inIndex++;
      continue;
    } else {
      return false;
    }
  }

  if (outIndex !== takeOut.length || inIndex !== dineIn.length) { return false }

  return true;
}