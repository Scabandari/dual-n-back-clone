import { LIGHTEN_SQUARE } from '../actions/types';

const initialState = {
    squareNumber: 0  // Squares numbered 1-9 
  };
  
  export default (state=initialState, { type, payload }) => {
    switch (type) {
      case LIGHTEN_SQUARE:
        return { ...state, squareNumber: payload };
      default:
        return state;
    }
  };