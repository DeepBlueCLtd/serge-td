import getDb from '../databases'
import { updateMessages, PUSH_MESSAGES, REMOVE_ALL_MESSAGES, UPDATE_MESSAGES } from '../actions/messages'
import { getGameControlChats } from '../defaults/allowedChats'

export const db = getDb('messages')
let initialState = {}
let changeTimer = null

const messages = (state = initialState, action) => {

  switch (action.type) {
    case PUSH_MESSAGES:
      let messages = initAdditionalAttributes(action.payload.messages)
      if(messages.length === 1)
        db.put(messages[0])
      else {
        db.bulkDocs(messages)
      }
      return state
    case REMOVE_ALL_MESSAGES:
      db.allDocs().then(result => {
        return Promise.all(result.rows.map(row => {
          return this.db.remove(row.id, row.value.rev);
        }));
      })
      return state
    case UPDATE_MESSAGES:
      let saveState = {...state}
      return {
        ...state,
        [action.payload.chatId]: action.payload.messages
      }
    default:
      return state
  }
}

const initAdditionalAttributes = (messages) => {
  return messages.map(message => {
    return {
      ...message,
      _id: new Date().toISOString(),
    }
  })
}

export default messages
