function checkPalindromes(string) {
  let oddCount = new Set();
  for (let i = 0; i < string.length; i++){
    if (oddCount.has(string[i])) {
      oddCount.delete(string[i]);
    } else {
      oddCount.add(string[i]);
    }
  }

  if (string.length % 2 === 0 && oddCount.size > 0) { return false }
  if (string.length % 2 === 1 && oddCount.size > 1) {return false }

  return true;
}