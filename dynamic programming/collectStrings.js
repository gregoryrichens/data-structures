function collectStrings(obj) {
  let returnArray = [];
  for (let key in obj) {
      // a string
      if (typeof obj[key] === 'string') {
          returnArray.push(obj[key])
      }
      if (typeof obj[key] === 'object') {
          returnArray = returnArray.concat(collectStrings(obj[key]))
      }
  }
  return returnArray;
}