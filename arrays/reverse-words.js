// given an array of single letters and spaces representing a series of words, reverse the order of 'words' in place

// input, an array of letters and numbers
// output, the same array with the order of the 'words' reversed

// e.g.
// message =
// ['y', 'o', 'u', ' ',
// 'i', ' ',
// 'l', 'o', 'v', 'e']

// reverseWords(message)
// --> ['i', ' ', 'l', 'o', 'v', 'e', ' ', 'y', 'o', 'u']

const reverseWords = function(message) {

  // helper function that reverses the order of an array
  // or a segment given the start and end index to reverse
  const segmentReverse = function(messageArray, startIndex, endIndex) {
    while (startIndex < endIndex) {
      let temp = messageArray[endIndex];
      messageArray[endIndex] = messageArray[startIndex];
      messageArray[startIndex] = temp;
      startIndex++;
      endIndex--;
    }
  }

  // reverse the input message array
  segmentReverse(message);

  let wordStart = 0;
  for ( let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === ' ') {
      segmentReverse(message, wordStart, i - 1);
      wordStart = i + 1;
    }
  }
}