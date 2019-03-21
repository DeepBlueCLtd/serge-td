import PouchDB from 'pouchdb-browser'
import defaultOptions from './config-default.json'
let options;

try {
 options = require('./config-local.json')
}
catch (e) {
 options = {}
}

options = {
  ...defaultOptions,
  ...options
}

export const dbOptions = {...options}

const getDb = (dbKey, sync, optionsManual) => {

  if(!options[dbKey] && !optionsManual)
    return new PouchDB(dbKey)

  if(!optionsManual) optionsManual = {}

  const optLoc = options[dbKey] ? {...options[dbKey], ...optionsManual} : optionsManual

  const db = new PouchDB(optLoc.name || dbKey)

  if(optLoc.remote && sync) {
    const remoteDB = new PouchDB(optLoc.remote)

    db.replicate.to(remoteDB, {
      live: optLoc.live,
      retry: optLoc.retry
    }).on('complete', done => {
      console.log('complete', done)
    })

    db.replicate.from(remoteDB, {
      live: optLoc.live,
      retry: optLoc.retry
    }).on('complete', done => {
      console.log('complete from', done)
    })
  }
  return db
}

export default getDb
/*
db.fullySync(remoteDB, {
  live: true,
  retry: true
}).on('change', function (info) {
  // handle change
}).on('paused', function () {
  // replication paused (e.g. user went offline)
}).on('active', function () {
  // replicate resumed (e.g. user went back online)
}).on('denied', function (info) {
  // a document failed to replicate, e.g. due to permissions
}).on('complete', function (info) {
  // handle complete
}).on('error', function (err) {
  // handle error
});
*/
