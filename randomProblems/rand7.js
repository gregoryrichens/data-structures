// given a function that generates a random number from 1-5, generate a number between 1 and 7
function rand7() {

  while (true) {

    // Do our die rolls
    const roll1 = rand5();
    const roll2 = rand5();

    const outcomeNumber = (roll1-1) * 5 + (roll2-1) + 1;

    // If we hit an extraneous
    // outcome we just re-roll
    if (outcomeNumber > 21) continue;

    // Our outcome was fine. return it!
    return outcomeNumber % 7 + 1;
  }
}

function rand5() {
  return Math.floor(Math.random() * 5) + 1;
}

function rand7Review() {
  function numberGenerator() {
    return (rand5() - 1) * 5 + rand5();
  };

  let randomNumber = numberGenerator();

  while (randomNumber > 21) {
    randomNumber = numberGenerator();
  }

  return randomNumber % 7 + 1;
}

console.log(rand7Review());