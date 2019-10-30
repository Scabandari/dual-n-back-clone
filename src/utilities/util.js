import _ from 'lodash';
import { A, B, C, D, E, F, G, H, I } from '../assets';

const audioFiles = [A, B, C, D, E, F, G, H, I];
const squareNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// from & to inclusive  ref: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const randomIntWithinRange = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const fillRepeats = (nLevel, gameData, repeats, paramName, possibleValues) => {
  const numberOfGameStates = gameData.length;
  while (repeats > 0) {
    repeats -= 1;
    let index = randomIntWithinRange(nLevel, numberOfGameStates - 1);

    if (gameData[index - nLevel][paramName]) {
      gameData[index][paramName] = gameData[index - nLevel][paramName];
    } else {
      const randomSample = _.sample(possibleValues);
      gameData[index][paramName] = randomSample;
      gameData[index - nLevel][paramName] = randomSample;
    }
  }
};

const fillRandoms = (nLevel, gameData, paramName, possibleValues) => {
  const numberOfGameStates = gameData.length;

  gameData.forEach((value, index) => {
    let badValues = [];
    if (!value[paramName]) {
      if (index - nLevel > -1) {
        // don't use index - nLevel value
        badValues.push(gameData[index - nLevel][paramName]);
      }
      if (index + nLevel < numberOfGameStates) {
        // don't use index + nLevel value
        badValues.push(gameData[index + nLevel][paramName]);
      }
      let randomValue = _.sample(possibleValues);
      while (badValues.includes(randomValue)) {
        randomValue = _.sample(possibleValues);
      }
      gameData[index][paramName] = randomValue;
    }
  });
};

const populateParams = (
  nLevel,
  gameData,
  numberRepeats,
  //numberOfGameStates,
  paramName,
  possibleValues
) => {
  let repeats = numberRepeats;
  fillRepeats(nLevel, gameData, repeats, paramName, possibleValues);

  fillRandoms(nLevel, gameData, paramName, possibleValues);
};

// Returns an array of audio file/square number pairs for the next game
// Some should be repeats and some should be random but NOT repeats
export const getGameParams = nLevel => {
  // TODO CHASE nLevel around
  const percentRepeats = [0.25, 0.3, 0.35, 0.4];
  //const nLevel = 2;
  const numberOfGameStates = 20; //10;
  let gameData = [];
  for (let i = 0; i < numberOfGameStates; i++) {
    gameData.push({
      audio: undefined,
      squareNumber: undefined
    });
  }
  let numberRepeats = Math.round(
    _.sample(percentRepeats) * (numberOfGameStates - nLevel)
  );

  populateParams(
    nLevel,
    gameData,
    numberRepeats,
    //numberOfGameStates,
    'squareNumber',
    squareNumbers
  );

  populateParams(
    nLevel,
    gameData,
    numberRepeats,
    //numberOfGameStates,
    'audio',
    audioFiles
  );

  // Add dummy values as last element, values that can't match nBack values
  gameData.push({
    audio: 'empty1928374', // anything that won't match audio files
    squareNumber: 201 // any # not 1-9
  });

  console.log('gameData', gameData);
  return gameData;
};
