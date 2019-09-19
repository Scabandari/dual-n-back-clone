import { PLAY_SOUND, UPDATE_SOUND_FILE } from '../actions/types';
import { A } from '../assets';

const initialState = {
  soundFile: 'void',  // any string that isn't path to audio files or empty will do
  soundIsPlaying: false
};

export default (state=initialState, { type, payload }) => {
  switch (type) {
    case PLAY_SOUND:
      return { ...state, soundIsPlaying: payload };
    case UPDATE_SOUND_FILE:
      return { ...state, soundFile: payload };
    default:
      return state;
  }
};
