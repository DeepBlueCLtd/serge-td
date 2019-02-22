import { persistentReducer } from 'redux-pouchdb-rethink'
import getDb from '../databases'
import { PUSH_MESSAGES, REMOVE_ALL_MESSAGES } from '../actions/messages'

const initialState = []

const nessages = (state = initialState, action) => {

  switch (action.type) {
    case PUSH_MESSAGES:
      return [...state, ...action.payload.messages]
    case REMOVE_ALL_MESSAGES:
      return []
    default:
      return state
  }
}

const db = getDb('messages')

export default persistentReducer(nessages, {db: db})
