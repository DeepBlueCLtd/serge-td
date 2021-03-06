import chats from '../defaults/allowedChats'
/* pouchdb filter management
 */

 // declare the messages filters
let messages = {
  cloneFilter: 'function (doc) { return !doc._deleted; }'
}
chats.forEach(({chatId}) => {
  messages[chatId] = `function (doc) { return doc.to === "${chatId}" && doc.draft === false || doc.from === "${chatId}"; }`
})

// declare the filters
export const filters = {
  messages: messages
}

export const prefix = 'filter'

// query couchdb filters
export const changes = (db, filter, params) => {
  return db.changes({
    since: 'now',
    live: true,
    include_docs: true,
    filter: prefix + filter
  })
}

export default filters
