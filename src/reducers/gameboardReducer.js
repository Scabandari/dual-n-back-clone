import {
  LIGHTEN_SQUARE,
  UPDATE_GAME_STATES,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME,
  SET_N_LEVEL
} from '../actions/types';

const initialState = {
  squareNumber: 10, // Squares numbered 1-9, nothing originally selected
  gameStates: [
    {
      audio: '',
      squareNumber: 1,
      audioHasRepeated: false,
      visualHasRepeated: false
    }
  ],
  gameInProgress: false,
  gameHasStarted: false,
  nLevel: 2
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIGHTEN_SQUARE:
      return { ...state, squareNumber: payload };
    case UPDATE_GAME_STATES:
      return { ...state, gameStates: payload };
    case START_GAME:
      return { ...state, gameInProgress: true, gameHasStarted: true };
    case STOP_GAME:
      return { ...state, gameInProgress: false, gameHasStarted: false };
    case PAUSE_GAME:
      return { ...state, gameInProgress: false };
    case SET_N_LEVEL:
      return { ...state, nLevel: payload };
    default:
      return state;
  }
};
