function largestRun(array, numberOfDigits) {
  if (array.length < numberOfDigits) {
    throw new Error(`you must have at least ${numberOfDigits} in your array`);
  }

  let maxSum = 0;

  let windowStart = 0
  let windowEnd = numberOfDigits - 1;

  for (let i = windowStart; i <= windowEnd; i++){
    maxSum += array[i];
  }

  let currentSum = maxSum;

  while (windowEnd < array.length - 1) {
    currentSum -= array[windowStart];
    windowStart++;
    windowEnd++;
    currentSum += array[windowEnd];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;

}