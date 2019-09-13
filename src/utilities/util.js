import { A, B, C } from '../assets';

export const getGameParams = () => {
  // return array of audio files with squares to light up
  const gameData = [
    {
      audio: A,
      squareNumber: 1
    },
    {
      audio: B,
      squareNumber: 2
    },
    {
      audio: C,
      squareNumber: 3
    }
  ];

  return gameData;
};
