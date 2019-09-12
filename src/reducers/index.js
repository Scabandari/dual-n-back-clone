import { combineReducers } from 'redux'
import soundReducer from './soundReducer'
import gameboardReducer from './gameboardReducer'

export default combineReducers({
    sound: soundReducer,
    gameBoard: gameboardReducer
})

