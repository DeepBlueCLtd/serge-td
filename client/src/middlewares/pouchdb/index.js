import rewindPoints from './rewindPoints'
import getDb from '../../databases'

//get databases
const rewindPointsDb = getDb('rewind-points')
const messagesDb = getDb('messages', false)
//watchers
const pouchdbMiddleware = store => next => action => {
  if (
    !rewindPoints(store, next, action, rewindPointsDb, messagesDb)
  )
  next(action)
}

export default pouchdbMiddleware
