function isSubsequence(substr, str) {
  // good luck. Add any arguments you deem necessary.
  let substrPointer = 0;
  let strPointer = 0;
  while (strPointer < str.length) {
    if (substr[substrPointer] === str[strPointer]) {
        substrPointer++;
    }
    strPointer++;
  }

  return substrPointer === substr.length;
}