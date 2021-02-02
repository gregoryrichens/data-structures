function fib(n) {
  let storage = {}

  function nthFinder(n) {
    if (n < 0) { throw new Error('n must be a positive integer') }

    if (n === 0 || n === 1) {
      storage[n] = n;
      return n;
    }

    if (storage.hasOwnProperty(n)) {
      return storage[n];
    }

    let answer = fib(n-2) + fib(n-1);
    storage[n] = answer;
    return answer;
  }

  return nthFinder(n);
}

function fibGroundUp(n) {
  if (n < 0) { throw new Error('n must be a positive integer') }

  if (n === 0 || n === 1) { return n }

  let twoAway = 0;
  let oneAway = 1;
  let answer;

  for (let i = 2; i <= n; i++){
    answer = twoAway + oneAway;
    twoAway = oneAway;
    oneAway = answer;
  }

  return answer;
}

console.log(fibGroundUp(4));