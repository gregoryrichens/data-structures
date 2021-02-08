// initial attempt

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  function reverseHelper(string) {
      if (string.length <= 1) { return string }
      return reverseHelper(string.slice(1)) + string[0];
  }

  let reverseWord = reverseHelper(str);
  return reverseWord === str;
}

// pure version
function isPalindrome2(str) {
  if (str.length <= 1) { return true }
  if (str[0] === str.slice(-1)) { return isPalindrome(str.slice(1, -1)) }
  return false;
}