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