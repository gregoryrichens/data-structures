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

function palindromPermutationsPractice(str) {
  let oddCount = new Set();

  for (let i = 0; i < str.length; i++){
    // if the set does not contain the letter, then add it to the set - it is in an odd number of times
    if (oddCount.has(str[i])) {
      oddCount.delete(str[i]);
    } else {
      oddCount.add(str[i]);
    }
    // if the set contains the letter, remove it - this means there is an odd frequency for this letter
    return str.length % 2 === 0 ? !(oddCount.size > 0) : !(oddCount.size > 1);


    // if length of the string is even return false if size of the set is greater than 0
    // if odd return false if size of set is greater than one
  }
}

console.log(palindromPermutationsPractice('civicz'));