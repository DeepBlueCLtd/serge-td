import { combineReducers } from 'redux'
import chat from './chat'
import messageTypes from './messageTypes'

export default combineReducers({
  chat, messageTypes
})
