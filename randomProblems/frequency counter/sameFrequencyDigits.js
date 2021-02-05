function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  let stringNum1 = String(num1);
  let stringNum2 = String(num2);

  if(stringNum1.length !== stringNum2.length) { return false }

  let storage1 = {};
  let storage2 = {};
  for (let i = 0; i < stringNum1.length; i++) {
    storage1.hasOwnProperty(stringNum1[i]) ? storage1[stringNum1[i]] += 1 : storage1[stringNum1[i]] = 1;
  }
  for (let i = 0; i < stringNum2.length; i++) {
    storage2.hasOwnProperty(stringNum2[i]) ? storage2[stringNum2[i]] += 1 : storage2[stringNum2[i]] = 1;
  }

  for (let key in storage1) {
      if(storage1[key] !== storage2[key]) { return false }
  }

  return true;
}