import { combineReducers } from 'redux'
import soundReducer from './soundReducer'

export default combineReducers({
    sound: soundReducer
})

