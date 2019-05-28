import rewindPoints from './rewindPoints'
import exportItems from './exportItems'
// import messages from './messages'
import getDb from '../../databases'

//get databases
const rewindPointsDb = getDb('rewind-points')
const messagesDb = getDb('messages', false)
//watchers
const pouchdbMiddleware = store => next => action => {
  let rewindAction = rewindPoints(store, next, action, rewindPointsDb, messagesDb)
  let exportAction = exportItems(store, next, action, rewindPointsDb, messagesDb)

  if (!(rewindAction || exportAction)) {
    next(action)
  }
}

export default pouchdbMiddleware
