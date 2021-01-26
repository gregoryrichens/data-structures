// given scores for a game, order them in descending order in less than O(nlogn) time

function scoreOrder (unsortedScores, maxScore) {
  let sortedArray = [];
  // create an array with a number of entries for number of possible scores
  let countArray = new Array(maxScore + 1).fill(0);

  // move through the unsorted Array and increase the value in the count array at the index represented by the score
  for (let i = 0; i < unsortedScores.length; i++){
    countArray[unsortedScores[i]]++;
  }

  // move through count array and push the score to a final sorted array as many times as there is a count at a particular index
  for (let j = maxScore; j > -1; j--){
    while (countArray[j] > 0) {
      sortedArray.push(j);
      countArray[j]--;
    }
  }
  // return the sorted array of scores
  return sortedArray;
}
