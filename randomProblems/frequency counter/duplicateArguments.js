function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  // use a set for storage
  let storage = new Set();
  for(let i=0; i < arguments.length; i++) {
      if(!storage.has(arguments[i])) {
          storage.add(arguments[i]);
      } else {
          storage.delete(arguments[i]);
      }
  }
  if(storage.size !== arguments.length) { return true }
  // if it's not in the set add it
  // if it is in the set, take it out
  // if the length of arguments and the size of the set are different return true
  // otherwise return false
  return false;
}

// DO ALL OF THIS IN ONE LINE
function areThereDuplicatesOneLine() {
  return new Set(arguments).size !== arguments.length;
}