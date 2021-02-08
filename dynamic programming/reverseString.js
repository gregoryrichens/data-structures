function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length < 2) { return str }
  // storage array - helper function
  let storage = [];
  let reverseHelper = function (recursiveString) {
      if (recursiveString.length === 1) {
          storage.unshift(recursiveString);
          return;
      }
      storage.unshift(recursiveString[0]);
      reverseHelper(recursiveString.slice(1));
  }
  reverseHelper(str);
  return storage.join('');
}