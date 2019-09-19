import { GAME_RESULT } from '../actions/types';

  const initialState = {
  userAnswersAudio: {
    correctPositives: 0, 
    incorrectPositives: 0,
    incorrectNegatives: 0
  },
  userAnswersVisual: {
    correctPositives: 0, 
    incorrectPositives: 0,
    incorrectNegatives: 0
  }
};
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GAME_RESULT:
        return {
          ...state,
          userAnswersAudio: payload.userAnswersAudio,
          userAnswersVisual: payload.userAnswersVisual
        };
      default:
        return state;
    }
  };
  













