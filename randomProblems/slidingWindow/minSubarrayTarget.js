// return the length of the minimum sized subarray that equals or exceeds target value

function minSubArrayLen(arr, targetSum) {
  // window start
  let windowStart = 0;
  // window end
  let windowEnd = 0;
  // min length variable
  let minLength = Infinity;
  // sum
  let sum = 0;
  // iteration
  while (windowStart < arr.length) {
    // sum is less than target
    if (sum < targetSum && windowEnd < arr.length) {
        // we add what is at end and increase end
        sum += arr[windowEnd];
        windowEnd++;
    } else if(sum >= targetSum) {
        minLength = Math.min(minLength, (windowEnd - windowStart));
        sum -= arr[windowStart];
        windowStart++;
    } else {
        break;
    }
    // sum is greater than target
  }
  return minLength === Infinity ? 0 : minLength;
}