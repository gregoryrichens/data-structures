function findAllPermutations(string) {
  // base case - if string is <= 1 then we the only permutation is itself
  if (string.length <= 1) { return new Set(string) } // why an array and why a set
  // otherwise
  // grab last character in string
  const lastCharacter = string[string.length - 1];
  const allCharactersExceptLast = string.slice(0, -1);
  // find all permutations of everything except for last
  const permutations = new Set();
  const allPermutationsExceptLast = findAllPermutations(allCharactersExceptLast);
  // for each permutation add the last string at every spot in the permutation
  allPermutationsExceptLast.forEach(permutationExceptForLast => {
    for (let i = 0; i <= allCharactersExceptLast.length; i++) {
      // create a permutation
      let permutation = permutationExceptForLast.slice(0,i) + lastCharacter + permutationExceptForLast.slice(i);
      // add the permutation to the permutations set
      permutations.add(permutation);
    }
  })

  return permutations;
}

console.log(findAllPermutations('blake'));

// let testString = 'mamma';
// let testSet = new Set([testString]);
// console.log(testSet);

// the way we solve this one recursively is to recurse on
// everything but the last character continually
// take off the last character
// find all permutations of everything but the last character
// for each permuration
// we go through as many times as the permutaiton is long
// substituting the last character from above at every step and adding to the set of permutations
function findAllPermutationsPractice(string) {
  if(string.length <= 1) { return new Set(string)}

  let allCharactersExceptLast = string.slice(0,-1);
  let lastCharacter = string[string.length - 1];
  let permutations = new Set();

  let allPermutationsExceptLast = findAllPermutationsPractice(allCharactersExceptLast);

  allPermutationsExceptLast.forEach((aPermutationExceptForLast) => {
    for (let i = 0; i < aPermutationExceptForLast.length; i++){
      let permutation = aPermutationExceptForLast.slice(0,i) + lastCharacter + aPermutationExceptForLast.slice(i);
      permutations.add(permutation);
    }
  });

  return permutations;
}