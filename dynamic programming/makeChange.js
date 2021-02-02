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