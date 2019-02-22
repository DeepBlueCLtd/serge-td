import { persistentReducer } from 'redux-pouchdb-rethink'
import formSchema, { schemaKeys } from '../defaults/messageTypes'
import getDb from '../databases'

const initialState = schemaKeys.map(schema => formSchema(schema))

const messageTypes = (state = initialState, action) => {

  switch (action.type) {
    default:
      return state
  }
}

const db = getDb('message-types')

export default persistentReducer(messageTypes, {db: db})
