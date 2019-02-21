import { persistentReducer } from 'redux-pouchdb-rethink'
import getDb from '../databases'
import { UPDATE_MESSAGES, REMOVE_ALL_MESSAGES } from '../actions/messages'

const initialState = []

const nessages = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_MESSAGES:
      return [...state, action.payload.message]
    case REMOVE_ALL_MESSAGES:
      return []
    default:
      return state
  }
}

const db = getDb('messages')

export default persistentReducer(nessages, {db: db})
