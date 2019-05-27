import { combineReducers } from 'redux'
import chats from './chats'
import messageTypes from './messageTypes'
import messages from './messages'
import rewindPoints from './rewindPoints'
import exportItems from './exportItems'

export default combineReducers({
  chats,
  messageTypes,
  messages,
  rewindPoints,
  exportItems
})
