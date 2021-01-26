function inPlaceShuffle(array) {
  function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }

  for (let i = 0; i < array.length; i++){
    let shuffleIndex = getRandom(i, array.length - 1);
    [array[i], array[shuffleIndex]] = [array[shuffleIndex], array[i]];
  }

  return array;
}

console.log(inPlaceShuffle([1,2,3,4,5]));