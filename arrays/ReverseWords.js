function reverseWords(array) {
  debugger;
  function reverseArrayInPlace(array, reverseStart = 0, reverseEnd=array.length - 1) {
    let start = reverseStart;
    let end = reverseEnd;

    while(start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }

  let wordStart, wordEnd;
  for (let i = 0; i < array.length; i++){
    if (array[i] === ' ') {
      continue;
    }
    if (wordStart === undefined) {
      wordStart = i;
    }
    wordEnd = i;
    if ((array[i + 1] === ' ') || (i === (array.length - 1))) {
      reverseArrayInPlace(array, wordStart, wordEnd);
      wordStart = undefined;
      wordEnd = undefined;
    }
  }

  reverseArrayInPlace(array);
  return array;
}

console.log(reverseWords([ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]));