import { combineReducers } from 'redux'
import chat from './chat'
import control from './control'

export default combineReducers({
  chat, control
})
