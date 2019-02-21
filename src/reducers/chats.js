import { persistentReducer } from 'redux-pouchdb-rethink'
import getDb from '../databases'
import { ADD_CHAT } from '../actions/chats'

const initialState = []

const chats = (state = initialState, action) => {

  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.payload.chat]
    default:
      return state
  }
}

const db = getDb('chats')

export default persistentReducer(chats, {db: db})
