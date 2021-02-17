function maxDuffelBagValue(cakeTypes, weightCapacity) {

  // We make an array to hold the maximum possible value at every
  // duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

    // Set a variable to hold the max monetary value so far for currentCapacity
    let currentMaxValue = 0;

    // We use a for loop here instead of forEach because we return infinity
    // If we get a cakeType that weighs nothing and has a value. but forEach
    // loops always return undefined and you can't break out of them without
    // throwing an exception
    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];

      // If a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      // If the current cake weighs as much or less than the current weight capacity
      // it's possible taking the cake would get a better value
      if (cakeType.weight <= currentCapacity) {

        // So we check: should we use the cake or not?
        // If we use the cake, the most kilograms we can include in addition to the cake
        // We're adding is the current capacity minus the cake's weight. we find the max
        // value at that integer capacity in our array maxValuesAtCapacities
        const maxValueUsingCake = cakeType.value
          + maxValuesAtCapacities[currentCapacity - cakeType.weight];

        // Now we see if it's worth taking the cake. how does the
        // value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    // Add each capacity's max value to our array so we can use them
    // when calculating all the remaining capacities
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
}

// unbounded knapsack practice

// use the common method of an array, with indexes representing weight and value referencing monetary value
// loop through the array
// at each possible weight, we can try different combinations by looking at the value at previous weights
// ie the max values at currentweight - each possble cake weight + the values of each cake
// whichever value total is largest is the max value at the current weight

function maxDuffelBagValuePractice(bagCapacity, cakeTypes) {
  let maxValuesAtCapacities = new Array(bagCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= bagCapacity; currentCapacity++){
    let maxCurrentValue = 0;

    for (let i = 0; i < cakeTypes.length; i++){
      let currentCake = cakeType[i];

      // if weight is 0 and value is non zero return infinity
      if (currentCake.weight === 0 && currentCake.value !== 0) {return Infinity }

      if (currentCake.weight <= currentCapacity) {
        let potentialMaxValue = maxValuesAtCapacities[i - currentCake.weight] + currentCake.value;

        maxCurrentValue = Math.max(maxCurrentValue, potentialMaxValue);
      }
    }

    maxValuesAtCapacities[currentCapacity] = maxCurrentValue;
  }

  return maxValuesAtCapacities[bagCapacity];
}