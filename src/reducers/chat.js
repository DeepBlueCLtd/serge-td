import { persistentReducer } from 'redux-pouchdb'
import { UPDATE_MESSAGES, REMOVE_ALL_MESSAGES } from '../actions/chat'

const initialState = {
  messages: []
}

const chat = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_MESSAGES:
      return { ...state, messages: [...state.messages, action.payload.message] }
    case REMOVE_ALL_MESSAGES:
      return { ...state, messages: [] }
    default:
      return state
  }
}

export default persistentReducer(chat)
