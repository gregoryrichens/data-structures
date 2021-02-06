function averagePair(arr, average){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < 2) { return false }
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
      let potentialAvg = (arr[pointer1] + arr[pointer2]) / 2;
      if (potentialAvg === average ) { return true }
      if (potentialAvg < average) {
          pointer1++;
      } else {
          pointer2--;
      }
  }

  return false;

}