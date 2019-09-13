import { UPDATE_SOUND_FILE, TOGGLE_SOUND, PLAY_SOUND } from './types';
import sleep from 'sleep-promise';

export const setSound = soundFile => {
    return {
      type: UPDATE_SOUND_FILE,
      payload: soundFile
    }
  };


export const playSound = () => async dispatch => {
  dispatch({
    type: PLAY_SOUND,
    payload: true
  });
  await sleep(2000);
  dispatch({
    type: PLAY_SOUND,
    payload: false // needs to be reset
  });
};
