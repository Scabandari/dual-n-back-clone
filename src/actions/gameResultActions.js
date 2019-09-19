import { GAME_RESULT } from './types';

export const setGameResults = userAnswers => {
  return {
    type: GAME_RESULT,
    payload: userAnswers
  };
};

// export const setGameResults = ({ userAnswersAudio, userAnswersVisual }) => ({
//   type: GAME_RESULT,
//   payload: { userAnswersAudio, userAnswersVisual }
// });
