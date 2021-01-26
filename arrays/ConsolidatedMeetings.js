function consolidateMeetings(meetings) {
  // merge sort meetings by start time
  if (meetings.length <= 1) { return meetings }

  function mergeHelper(arr1, arr2) {
    let mergedArray = [];
    let countOne = 0;
    let countTwo = 0;

    while (countOne < arr1.length && countTwo < arr2.length) {
      if (arr1[countOne].startTime < arr2[countTwo].startTime) {
        mergedArray.push(arr1[countOne]);
        countOne++;
      } else {
        mergedArray.push(arr2[countTwo]);
        countTwo++;
      }
    }

    // merge the remaining array
    if (countOne < arr1.length) {
      mergedArray = mergedArray.concat(arr1.slice(countOne));
      countOne++;
    } else {
      mergedArray = mergedArray.concat(arr2.slice(countTwo));
      countTwo++;
    }

    return mergedArray;
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    let midpoint = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, midpoint));
    let right = mergeSort(array.slice(midpoint));

    return mergeHelper(left, right);
  }

  let sortedMeetings = mergeSort(meetings);
  // initiate a new Array with the first item
  let consolidatedArray = [sortedMeetings[0]];
  // initiate count at 0
  let count = 0;
  // loop through meeting array comparing for overlap, start at 1
  for (let i = 1; i < sortedMeetings.length; i++){
    if (sortedMeetings[i].endTime <= consolidatedArray[count].endTime) {
      continue;
    } else if (sortedMeetings[i].startTime <= consolidatedArray[count].endTime) {
      consolidatedArray[count].endTime = sortedMeetings[i].endTime;
    } else if (sortedMeetings[i].startTime > consolidatedArray[count].endTime) {
      consolidatedArray.push(sortedMeetings[i]);
      count++;
    }
  }
  return consolidatedArray;
}

let testArray = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

let consolidatedArray = consolidateMeetings(testArray);
console.log(consolidatedArray);