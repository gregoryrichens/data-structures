function inFlightCombo(flightLength, movieLengths) {
  let storage = {};
  for (let i = 0; i < movieLengths.length; i++){
    storage[movieLengths[i]] = movieLengths[i];
  }

  for (let j = 0; j < movieLengths.length; j++){
    let secondMovie = flightLength - movieLengths[j];
    if (movieLengths[secondMovie] && secondMovie !== movieLengths[j]) {
      return true;
    }
  }

  return false;
}

function optimizedInFlightCombo(flightLength, movieLengths) {
  let storage = new Set();
  for (let i = 0; i < movieLengths.length; i++){
    let secondMovieLength = flightLength - movieLengths[i];
    if (storage.has(secondMovieLength)) {
      return true;
    }
    storage.add(movieLengths[i]);
  }

  return false;
}