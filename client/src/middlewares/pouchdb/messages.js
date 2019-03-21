import {} from '../../actions/rewindPoints'

import { INIT } from  '../../actions/init'

const rewindPoints = (store, next, action, db, messagesDb) => {
  switch (action.type) {
    case INIT:
      init(db, store)
    break
    case CREATE_REWIND_POINT:
      cloneDatabase(messagesDb, dbOptions.messages).then(clonedData => {
        db.put({
          ...initAdditionalAttributes(action.payload),
          ...clonedData
        }).then(point => {
          updateLocalRewindPoints(db, store)
        })
      })
    case SELECT_REWIND_POINT:
      db.allDocs({include_docs: true}).then(({ rows }) => {
        const changedDocs = rows.filter(row => (row.doc.active || row.doc._id === action.payload.id))
                                .map(item => ({...item.doc, active: !item.doc.active}))

        db.bulkDocs(changedDocs).then(() => {
          updateLocalRewindPoints(db, store)
        })
      })
    break
    default:
      return false
  }
  return true
}

const cloneDatabase = (db, options) => {
  return new Promise((resolve, reject) => {
    const id = getId()
    const messagesDbName = options.name + '-rewind-' + id;
    const newDb = getDb(messagesDbName)

    newDb.replicate.from(db, {
      live: false,
      retry: false,
      filter: 'filtermessages/cloneFilter'
    }).on('complete', done => {
      console.log('success', done);
      if(options.remote) {
        const messagesRemoteDbName = options.remote + '-rewind-' + id
        const remoteDb = getDb(messagesRemoteDbName)
        remoteDb.replicate.from(newDb, {
          live: false,
          retry: false
        }).on('complete', doneRemote => {
          resolve({_id: id, local: messagesDbName, remote: true})
        }).on('error', err => {
          console.log("Error on remote database sync, created only local db");
          console.log(err)
          resolve({_id: id, local: messagesDbName, remote: false})
        })
      }
      else {
        resolve({_id: id, local: messagesDbName, remote: false})
      }
    }).on('error', err => {
      console.log("Error on local db clone");
      console.log(err)
      reject()
    })
  })
}

const init = (db, store) => {
  updateLocalRewindPoints(db, store)
}

const updateLocalRewindPoints = (db, store) => {
  db.allDocs({include_docs: true}).then(({rows}) => {
    store.dispatch(updateRewindPoints(rows))
  })
}

const getId = (key) => {
  return new Date().toISOString() + "-" + (key || '0')
}

const initAdditionalAttributes = (rewindPoint) => {
  return {
    ...rewindPoint,
    active: false,
    roomId: ""
  }
}

export default rewindPoints
