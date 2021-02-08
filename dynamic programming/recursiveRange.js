// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(n){
  if (n < 2) { return n }
  return n + recursiveRange(n - 1);
}

