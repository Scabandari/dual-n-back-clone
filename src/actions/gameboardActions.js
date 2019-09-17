import { getGameParams } from '../utilities/util';
import sleep from 'sleep-promise';
import {
  LIGHTEN_SQUARE,
  UPDATE_GAME_STATES,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME
} from './types';

export const lightenSquare = squareNumber => async dispatch => {
  dispatch({
    // resets the squares so repeats will lighten
    type: LIGHTEN_SQUARE,
    payload: 12 // not a square number, any non-square number will do
  });
  await sleep(50)
  dispatch({
    type: LIGHTEN_SQUARE,
    payload: squareNumber
  });
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

export const stopGame = () => async dispatch => {
  dispatch({
    type: STOP_GAME
  });

  dispatch(updateGameParams());
};

export const pauseGame = () => {
  return {
    type: PAUSE_GAME
  };
};
