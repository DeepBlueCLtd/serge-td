import { CREATE_EXPORT } from '../../actions/exportItems'

const rewindPoints = (store, next, action, db, messagesDb) => {
  switch (action.type) {
    case CREATE_EXPORT:
      checkMessageTypes(null, null, action.payload.messageTypes, messagesDb, result => {
        next({...action, payload: {
          name: `Export: ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`,
          data: result
        }})
      })
      break
    default:
      return false
  }
  return true
}

const findByMessageType = (db, messageType) => {
  return db.query((doc, emit) => {
    emit(doc.type)
  }, {key: messageType, include_docs: true})
}

const checkMessageTypes = (key, data, messageTypes, db, f) => {
  if(!key) key = 0
  if(!data) data = []
  if(messageTypes[key]) {
    findByMessageType(db, messageTypes[key].scheme).then(({rows}) => {
      data.push({
        title: messageTypes[key].title,
        data: rows
      })
      checkMessageTypes(key+1, data, messageTypes, db, f)
    });
  }
  else {
    f(data)
  }
}

export default rewindPoints
