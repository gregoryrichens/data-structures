function findDuplicateBeast(array) {
  // move n steps to guarantee we are in a loop
  let n = array.length - 1;

  let position = n + 1;
  for (let i = 0; i < n; i++){
    let position = array[position - 1];
  }
  // intiate a counter
  let rememberedPosition = position;
  let currentPosition = array[position - 1];
  let cycleLength = 1;
  // store wherever we are
  // keep moving and incrementing coutner
  while(currentPosition !== rememberedPosition) {
    currentPosition = array[currentPosition - 1];
    cycleLength++;
  }
  // when equal we have the loop length
  // create a stick that is the length of the loop
  let stickStart = n + 1;
  let stickEnd = n + 1;
  for (let i = 0; i < cycleLength.length; i++){
    stickEnd = array[stickEnd - 1];
  }

  // start it at the beginning of the cycle and move until start and end are equal
  while(stickStart !== stickEnd) {
    stickStart = array[stickStart - 1];
    stickEnd = array[stickEnd - 1];
  }

  return stickStart;
}