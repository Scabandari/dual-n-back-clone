import { getGameParams } from '../utilities/util';
import {
  LIGHTEN_SQUARE,
  UPDATE_GAME_STATES,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME
} from './types';

export const lightenSquare = squareNumber => {
  return {
    type: LIGHTEN_SQUARE,
    payload: squareNumber
  };
};

export const updateGameParams = () => {
  const params = getGameParams();
  return {
    type: UPDATE_GAME_STATES,
    payload: params
  };
};

export const startGame = () => {
  return {
    type: START_GAME
  };
};

export const stopGame = () => {
  return {
    type: STOP_GAME
  };
};

export const pauseGame = () => {
    return {
      type: PAUSE_GAME
    };
  };

