let getChange = function(targetAmount, denominations) {
  let nCentsCombosArray = new Array(targetAmount + 1).fill(0);
  nCentsCombosArray[0] = 1;

  // loop through all denominations
  denominations.forEach (coin => {
    for (let currentAmount = coin; currentAmount <= targetAmount; currentAmount++){
      let remainder = currentAmount - coin;
      nCentsCombosArray[currentAmount] += nCentsCombosArray[remainder];
    }
  })
  // loop until reaching ammount
    // find remainder between targetedAmount and coin
    // nCentsCombosArray at the given index is whatever is there plus whatever value is in the array at index remainder
  return nCentsCombosArray[targetAmount]
}

console.log(getChange(235, [1,5,10,25,100]));

function getChangeRecursive(targetAmount, denominations, currentIndex) {
  let storage = {};
  // define a recursive function
  function recursiveHelper(amountLeft, denominations, currentIndex) {
    // if amountLeft is saved in storage, return that answer
    let key = [amountLeft, currentIndex].join(', ');
    if (storage.hasOwnProperty(key)) {
      return storage[key];
    }
    // exit case we found the amount
    if (amountLeft === 0) { return 1 };
    // exit casae we overshot
    if (amountLeft < 0) { return 0 };
    // exit case out of coins
    if (index > denominations.length) { return 0 };

    // current coin
    let currentCoin = denominations[currentIndex];
    // number of possibilities
    let numPossibilities = 0;

    while (amountLeft >= 0) {
      // this ensures we run the function for every coin deenominatin in our array
      numPossibilities += recursiveHelper(amountLeft, denominations, currentIndex + 1);
      amountLeft -= currentCoin;
    }

    // save in memo
    storage[key] = numPossibilities;
    // return answer
    return numPossibilities;
  }
  // return the recursive function
}

function makeChangePractice(targetAmount, denominations) {
  nCentsCombosArray = new Array(targetAmount + 1).fill(0);
  nCentsCombosArray[0] = 1;

  denominations.forEach(coin => {
    for (let currentAmount = coin; i <= targetAmount; currentAmount++){
      let remainder = currentAmount - coin;
      nCentsCombosArray[currentAmount] += nCentsCombosArray[remainder]
    }
  })

  return nCentsCombosArray[targetAmount];
}

function makeChangePracticeTopDown(amountLeft, denominations, currentIndex = 0) {
  // if amount left is zero then we increment the count
  if (amountLeft === 0) { return 1 }
  // if we reach a negative amount then we did not reach the target exactly and count doesn't increase
  if (amountLeft < 0) { return 0 }
  // if we run out of coins then the count doesn't increase
  if (currentIndex === denominations.length) { return 0 }

  // variable for tracking solutions
  let solutions = 0;

  // we want to loop while the amount left is greater than or equal to zero
  while (amountLeft >= 0) {
    // recurse with the given amount but with the next coin in the series
    solutions += makeChangePracticeTopDown(amountLeft, denominations, currentIndex + 1);
    // subtract the current coing for the amount left
    amountLeft -= denominations[currentIndex];
  }

  // return solution count
  return solutions;
}