
let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}


function stringifyNumbers(obj) {
  // iterate through object
  let newObj = {}
  for (let key in obj) {
      if (typeof obj[key] === 'number') {
          newObj[key] = String(obj[key])
      } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          newObj[key] = stringifyNumbers(obj[key]);
      } else {
          newObj[key] = obj[key];
      }
  }
  // if something is a number strinfigy it
  // if it is an object, recurse
  return newObj;
}

/*
{
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}
*/