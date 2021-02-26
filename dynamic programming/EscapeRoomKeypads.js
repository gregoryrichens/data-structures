// given an array of acceptable actual words, and an array of keypads, each keypad with 7 unique letters
// return an array of the number of valid words composable by each keypad

function numKeypadSolutions(wordlist, keypads) {
  // Write your code here
  // INPUT: an array of acceptable words
    // an array of 7 letter strings, each letter representing a key button
  // OUTPUT: array of numbers corresponding to the number of words from wordlist
  // that can be made from each keypad in order
  // CONSTRAINTS: all words in wordlist are at least 5 letters long
    // first letter of each keypad is guaranteed to be in the word
    // longest word in scrabble dictionary is 15 characters long - must be faster way
  // EDGE CASES: what happens if no letters match?

  // iterate over wordlist, and store a set in a new wordlist array of all letters of word
  let wordListSets = wordlist.map(word => {
      let wordSet = new Set();
      for(let i=0; i < word.length; i++) {
          let letter = word[i];
          if(!wordSet.has(letter)) { wordSet.add(letter) }
      }
      return wordSet;
  });

  // write a mapping function that takes a keypad string
      // initiates a  count at 0
      // makes a set of the string
      // loops through the entire new wordlist array
          // if the word doesn't have keypadstring[0] continue
          // if all letters in word set are contained in string set increment the count
      // return the count
  let numValidSolutions = keypads.map(keyString => {
      let solutionCount = 0;
      let keyStringSet = new Set();
      for(let i=0; i < keyString.length; i++) {
          let letter = keyString[i];
          if(!keyStringSet.has(letter)) { keyStringSet.add(letter) }
      }

      for(let j = 0; j < wordListSets.length; j++) {
          let allLettersPresent = true;
          let wordSetInQuestion = wordListSets[j];
          if (!wordSetInQuestion.has(keyString[0])) { continue }
          for(let letter of wordSetInQuestion) {
              if(!keyStringSet.has(letter)) {
                  allLettersPresent = false;
                  break;
              }
          }

          if (allLettersPresent) { solutionCount++ }
      }

      return solutionCount;
  })

  return numValidSolutions;
  // THE ULTRA 1337 SOLUTION USES A BIT MASK. WTF IS THAT
}
