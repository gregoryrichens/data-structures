function findClosingParen(string, openParenIndex) {
  let openParenCount = 1;

  for (let i = openParenIndex + 1; i < string.length; i++){
    if (string[i] === ')') { openParenCount -= 1 }
    if (string[i] === '(') { openParenCount += 1 }
    if (openParenCount === 0) { return i }
  }

  return null;
}