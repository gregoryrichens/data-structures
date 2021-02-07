function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === 5) { debugger }
    let char = str[i];
    if (seen.hasOwnProperty(char)) {
      start = Math.max(start, (seen[char] + 1));
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i;
  }
  return longest;
}