import { combineReducers } from 'redux'
import soundReducer from './soundReducer'
import gameboardReducer from './gameboardReducer'
import gameResultReducer from './gameResultReducer'
import authReducer from './authReducer'

export default combineReducers({
    sound: soundReducer,
    gameBoard: gameboardReducer,
    gameResult: gameResultReducer,
    auth: authReducer
})

