import { UPDATE_MESSAGES } from '../actions/chat'

const initialState = {
}

const chat = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_MESSAGES:
      return { ...state, loaded: true }
    default:
      return state
  }
}

export default chat
