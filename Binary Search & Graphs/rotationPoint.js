// this is probably 1/2n complexity

function findRotation(array) {
  for (let i = 0; i < array.length - 1; i++){
    if(array[i + 1] < array[i]) {
      return (i+1);
    }
  }

  throw new Error('no rotation point - array is sorted');
}

// console.log(findRotation(['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']));

// O(log n) approach I guess this is technically O(n)
// in worst case we are going through half of the array
function sideOfRotationIndex(beginning, currentWord) {
  if (currentWord < beginning) {
    return 'left';
  } else {
    return 'right';
  }
}

function findRotationRecursive(array, guessIndex = Math.floor(array.length / 2)) {
  if (array.length < 2) { return array[0] }
  if (guessIndex > array.length || guessIndex < 0) { throw new Error('you are out of bounds') }

  let beginning = array[0];
  let guess = array[guessIndex];

  if (sideOfRotationIndex(beginning, guess) === 'right' && sideOfRotationIndex(beginning, guess + 1) === 'left') {
    return (guess + 1);
  } else if (sideOfRotationIndex(beginning, guess) === 'right') {
    return findRotation(array, guessIndex + 1);
  } else {
    return findRotation(array, guessIndex - 1);
  }
}

// console.log(findRotationRecursive(['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']));

// interview cake solution
function findRotationPoint(words) {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    const guessIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2);

    // if guess is to the right of index make the ceiling the guess
    if (words[guessIndex] < firstWord) {
      ceilingIndex = guessIndex;
    }

    // if the guess is to the left of the index make the floor the guessIndex
    if (words[guessIndex] >= firstWord) {
      floorIndex = guessIndex;
    }

    if (floorIndex + 1 === ceilingIndex) {
      if (words[floorIndex] < words[ceilingIndex]) {
        return 0;
      } else {
        break;
      }
    }
  }

  return ceilingIndex;
}

console.log(findRotationPoint(['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']));