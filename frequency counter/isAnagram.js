function isAnagram(str1, str2) {
  if (str1.length !== str2.length) { return false }

  // storage for first string
  let storage1 = {};
  // storage for second string
  let storag2 = {};

  //store value frequency for first string
  for (let i = 0; i < str1.length; i++){
    storage1[str1[i]] ? storage1[str1[j]] += 1 : storage1[str1[j]] = 1;
  }
  // store for second string
  for (let j = 0; j < str2.length; j++){
    storage2[str2[j]] ? storage2[str2[j]] += 1 : storage2[str2[j]] = 1;
  }

  for (let key in storage1) {
    if (storage1[key] !== storage2[key]) {
      return false;
    }
  }

  // loop through storage1 to see if its values match storage two

  return true;
}