// given an array that represents the stock price at every minute of the day, give the biggest profit

function biggestGain(priceArray) {
  // track the lowest price
  if (priceArray.length < 2) { throw new Error('potential profit requires at least two different prices throughout the day')}
  let lowestPrice = priceArray[0];
  // track the highest return
  let highestReturn = priceArray[1] - priceArray[0];
  // go through all of the prices
  for (let i = 1; i < priceArray.length; i++){
    let profit = priceArray[i] - lowestPrice;
    if (profit > highestReturn) { highestReturn = profit }
    if (priceArray[i] < lowestPrice) { lowestPrice = priceArray[i] }
  }
    // if the new price is lower than the lowest price, change lowest price
    // the profit will be the lowest price subtracted from the current price
    // if the profit is higher than highest return, change the highest return

  // return the highest return
  return highestReturn;
}