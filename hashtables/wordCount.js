function wordCount(string) {
  // need a way to check if something is a letter - put letters in a set or object
  function isLetter(widget) {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\''.indexOf(widget) > -1;
  }

  let words = [];
  // iterate over the string
  for (let i = 0; i < string.length; i++){
    let stringStart;
    let stringLength = 0;
    // if a letter OR a hyphen surrounded by letters
    if (isLetter(string[i]) || (string[i] === '-' && isLetter(string[i-1]) && isLetter(string[i+1]))) {
      if (stringLength === 0) {
        stringStart = i;
      }
      stringLength++;
      if (i + 1 > string.length || !isLetter(string[i+1])) {
        words.push(string.slice(stringStart, stringStart + stringLength));
        stringLength = 0;
      }
    }
  }

  // create a map
  let wordMap = new Map();
  // iterate over word storage
  for (let j = 0; j < words.length; j++){
    let mapWord = words[j].toLowerCase();
    if (wordMap.has(mapWord)) {
      wordMap.set(mapWord, wordMap.get(mapWord) + 1);
    } else {
      wordMap.set(mapWord, 1);
    }
  }

  // account for hyphenated words and apostrophes??
  return wordMap;
}
