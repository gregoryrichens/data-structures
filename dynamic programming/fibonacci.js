// pure recursion

function fib(n){
  if ( n < 3) { return 1 }
  return fib(n - 1) + fib(n -2);
}

function fibonacciPractice(n) {
  if(n <= 2){ return 1 }
  return fib(n - 1) + fib(n - 2);
}

// recursive solution with memo - basically O(n) time instead of 2^n

function fibMemoized(n) {
  let memo = {};
  memo[1] = 1;
  memo[2] = 1;
  function recursiveHelper(nth) {
    if (memo[nth]) { return memo[nth] }
    let response = recursiveHelper(nth - 1) + recursiveHelper(nth - 2);
    memo[nth] = response;
    return response;
  }

  return recursiveHelper(n);
}

// bottom up approach

function fibBottomUp(n, arr = [undefined, 1, 1]) {
  for (let i = 3; i <= n; i++){
    let res = arr[i - 1] + arr[i - 2];
    arr[i] = res;
  }

  return arr[n];
}

// more practice recursive memoized
function fibMemoizedPractice(n) {
  let memo = {};
  memo[1] = 1;
  memo[2] = 1;

  function fibHelper(n) {
    if (memo[n]) { return memo[n] }
    let res =  fibHelper(n-2) + fibHelper(n-1);
    memo[n] = res;

    return res;
  }
}