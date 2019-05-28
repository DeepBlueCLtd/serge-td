import { persistentReducer } from 'redux-pouchdb-rethink'
import getDb from '../databases'
import { CREATE_EXPORT, REMOVE_EXPORTS } from '../actions/exportItems'

const initialState = []

const exportItems = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_EXPORT:
      return [...state, action.payload]
    case REMOVE_EXPORTS:
      return []
    default:
      return state
  }
}

const db = getDb('exports')

export default persistentReducer(exportItems, {db: db, name: "exports"})
