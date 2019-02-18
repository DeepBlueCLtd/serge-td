import { persistentReducer } from 'redux-pouchdb-plus'
import PouchDB from 'pouchdb-browser'
import formSchema, { schemaKeys } from './messageTypesDefault'


const initialState = schemaKeys.map(schema => formSchema(schema))

const messageTypes = (state = initialState, action) => {

  switch (action.type) {
    default:
      return state
  }
}

const db = new PouchDB('message-types')

export default persistentReducer(messageTypes, {db: db})
