import { UPDATE_MESSAGES } from '../actions/chat'

const initialState = {
  messages: []
}

const chat = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_MESSAGES:
      // TODO: push pounchDB
      return { ...state, messages: [...state.messages, action.payload.message] }
    default:
      return state
  }
}

export default chat
