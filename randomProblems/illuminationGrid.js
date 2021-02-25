function checkIllumination(N, lamps, queries) {
  console.log(N, lamps, queries);
  // write a function that counts initial illumination
  function initialIllumination(queryPoint) {
      let illumination = 0;
      // loops through all lamps
      // if same row + 1
      // if same column + 1
      // if diagonals (absolute value of column - column, and row minus row) + 1
      lamps.forEach((lamp) => {
          if(lamp[0] === queryPoint[0] && lamp[1] === queryPoint[1]) {
              illumination++;
          } else {
              if(lamp[0] === queryPoint[0]) { illumination++ }
              if(lamp[1] === queryPoint[1]) { illumination++ }
              let rowDiff = Math.abs(queryPoint[1] - lamp[1]);
              let colDiff = Math.abs(queryPoint[0] - lamp[0]);
              if(rowDiff / colDiff === 1) { illumination++ }
          }
      });

      return illumination;
  }

  // write a helper function adjacency checker that checks for adjacent lamps
  function adjacencyChecker(queryPoint) {
      let delumination = 0;
      // self
      // row or column
      // diagonals
      let adjacentPoints = [
          JSON.stringify(queryPoint),
          JSON.stringify([queryPoint[0], queryPoint[1]+1]),
          JSON.stringify([queryPoint[0], queryPoint[1]-1]),
          JSON.stringify([queryPoint[0]+1, queryPoint[1]]),
          JSON.stringify([queryPoint[0]+1, queryPoint[1]+1]),
          JSON.stringify([queryPoint[0]+1, queryPoint[1]-1]),
          JSON.stringify([queryPoint[0]-1, queryPoint[1]]),
          JSON.stringify([queryPoint[0]-1, queryPoint[1]+1]),
          JSON.stringify([queryPoint[0]-1, queryPoint[1]-1])
      ]

      lamps.forEach((lamp) => {
          if(adjacentPoints.indexOf(JSON.stringify(lamp)) >= 0) { delumination-- }
      });

      return delumination;
  }

  // map queries
  let illuminationArray = queries.map((query) => {
      // illumination count = initial illumination helper
      let illuminationCount = initialIllumination(query);
      console.log(illuminationCount);
      // delumination count = adjacency checker
      let deluminationCount = adjacencyChecker(query);
      console.log(deluminationCount);
      // if i + d > 0 return 'light' otherwise it is 'dark'
      return (illuminationCount + deluminationCount > 0) ? 'LIGHT' : 'DARK';
  })

  // return the mapped array
  return illuminationArray;

}