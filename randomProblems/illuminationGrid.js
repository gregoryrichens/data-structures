// function checkIllumination(N, lamps, queries) {
//   console.log(N, lamps, queries);
//   // write a function that counts initial illumination
//   function initialIllumination(queryPoint) {
//       let illumination = 0;

//       let adjacentPoints = [
//         JSON.stringify(queryPoint),
//         JSON.stringify([queryPoint[0], queryPoint[1]+1]),
//         JSON.stringify([queryPoint[0], queryPoint[1]-1]),
//         JSON.stringify([queryPoint[0]+1, queryPoint[1]]),
//         JSON.stringify([queryPoint[0]+1, queryPoint[1]+1]),
//         JSON.stringify([queryPoint[0]+1, queryPoint[1]-1]),
//         JSON.stringify([queryPoint[0]-1, queryPoint[1]]),
//         JSON.stringify([queryPoint[0]-1, queryPoint[1]+1]),
//         JSON.stringify([queryPoint[0]-1, queryPoint[1]-1])
//       ];

//       lamps.forEach((lamp) => {
//           if(lamp[0] === queryPoint[0] && lamp[1] === queryPoint[1]) {
//               illumination++;
//           } else {
//               if(lamp[0] === queryPoint[0]) { illumination++ }
//               if(lamp[1] === queryPoint[1]) { illumination++ }
//               let rowDiff = Math.abs(queryPoint[1] - lamp[1]);
//               let colDiff = Math.abs(queryPoint[0] - lamp[0]);
//               if(rowDiff / colDiff === 1) { illumination++ }
//           }
//           if(adjacentPoints.indexOf(JSON.stringify(lamp)) >= 0) { illumination-- }
//       });

//       return illumination;
//   }

//   // map queries
//   let illuminationArray = queries.map((query) => {
//       // illumination count = initial illumination helper
//       let illuminationCount = initialIllumination(query);
//       return (illuminationCount > 0) ? 'LIGHT' : 'DARK';
//   })

//   // return the mapped array
//   return illuminationArray;

// }

function checkIllumination(N, lamps, queries) {
  // set for storing lamp locations
  let lampSet = new Set();
  // object for column
  let column = {};
  // object for row
  let row = {};
  // object for diagonal 1
  let diag1 = {};
  // object for diagonal 2
  let diag2 = {};

  // run through all lamps and store increment values in hashtables for each lamp
  lamps.forEach(lamp => {
    let [x,y] = lamp;
    let key = `${x},${y}`;
    column[x] = (column[x] || 0) + 1;
    row[y] = (row[y] || 0) + 1;
    diag1[x+y] = (diag1[x+y] || 0) + 1;
    diag2[x-y] = (diag2[x-y] || 0) + 1;
    // store lamp location in a set
    lampSet.add(key);
  });

  // loop through all queries
  let illuminationArray = queries.map(query => {
    let [x,y] = query;
    let illuminationTotal = (column[x] || 0) + (row[y] || 0) + (diag1[x+y] || 0) + (diag2[x-y] || 0);
    // in the event that the query is a lamp spot, we are quadruple counting the lamp
    // -3 to compensate if this is the case
    let checkKey = `${x},${y}`;
    if (lampSet.has(checkKey)) { illuminationTotal -= 3 }
    for (let i = x-1; i <= x+1; i++){
      for (let j = y-1; j <= y+1; j++){
        let key = `${i},${j}`;
        if (lampSet.has(key)) { illuminationTotal-- }
      }
    }
    return (illuminationTotal > 0) ? 'LIGHT' : 'DARK';
  });

  return illuminationArray;
}