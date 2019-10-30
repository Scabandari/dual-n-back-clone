import axios from 'axios';
import { getGameParams } from '../utilities/util';
import sleep from 'sleep-promise';
import {
  LIGHTEN_SQUARE,
  UPDATE_GAME_STATES,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME,
  SET_N_LEVEL
} from './types';
import { catchClause } from '@babel/types';

export const lightenSquare = squareNumber => async dispatch => {
  dispatch({
    // resets the squares so repeats will lighten
    type: LIGHTEN_SQUARE,
    payload: 12 // not a square number, any non-square number will do
  });
  await sleep(50);
  dispatch({
    type: LIGHTEN_SQUARE,
    payload: squareNumber
  });
};

export const updateGameParams = (nLevel) => {
  const params = getGameParams(nLevel);
  return {
    type: UPDATE_GAME_STATES,
    payload: params
  };
};

export const updateNLevel = (userId, nLevel) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.put(`/dnbc/user/${userId}`, { nLevel }, config);
    //console.log(res);
    dispatch ({
      type: SET_N_LEVEL,
      payload: res.data.nLevel
    });
  } catch (err) {
    console.log(err);
  }
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
