import { combineReducers } from 'redux'
import chats from './chats'
import messageTypes from './messageTypes'
import messages from './messages'
import rewindPoints from './rewindPoints'

export default combineReducers({
  chats,
  messageTypes,
  messages,
  rewindPoints
})
