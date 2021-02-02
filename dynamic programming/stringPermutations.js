function findAllPermutations(string) {
  // base case - if string is <= 1 then we the only permutation is itself
  if (string.length <= 1) { return new Set([string]) } // why an array and why a set
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
}