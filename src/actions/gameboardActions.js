import { LIGHTEN_SQUARE } from './types';
//import sleep from 'sleep-promise';

export const lightenSquare = squareNumber => {
  return {
    type: LIGHTEN_SQUARE,
    payload: squareNumber
  }
};
