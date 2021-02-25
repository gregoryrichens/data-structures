function checkIllumination(N, lamps, queries) {
  console.log(N, lamps, queries);
  // write a function that counts initial illumination
  function initialIllumination(queryPoint) {
      let illumination = 0;

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
      ];

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
          if(adjacentPoints.indexOf(JSON.stringify(lamp)) >= 0) { illumination-- }
      });

      return illumination;
  }

  // map queries
  let illuminationArray = queries.map((query) => {
      // illumination count = initial illumination helper
      let illuminationCount = initialIllumination(query);
      return (illuminationCount > 0) ? 'LIGHT' : 'DARK';
  })

  // return the mapped array
  return illuminationArray;

}