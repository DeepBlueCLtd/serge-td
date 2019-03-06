import chats from '../defaults/allowedChats'
/* pouchdb filter management
 */

 // declare the messages filters
let messages = {}
chats.forEach(({chatId}) => {
  messages[chatId] = (doc => ((doc.to === "chatId" && doc.draft === false) || doc.from === "chatId"))
                    .toString()
                    .replace(new RegExp("chatId", 'g'), chatId)
})

// declare the filters
const filters = {
  messages: messages
}

const prefix = 'filter'

// query couchdb filters
export const changes = (db, filter, f, params) => {
  const namespace = filter.split('/')[0]

  db.changes({
    since: 'now',
    live: true,
    include_docs: true,
    filter: prefix + filter
  }).on('change', () => {f()}).catch(err => {

    if (!filters[namespace]) throw new Error('filter ' + namespace + ' is not defined.')

    // if filter doesn't exist, create it, and try again
    if(err.status === 404) {
      db.put({
        _id: '_design/' + prefix + namespace,
        filters: filters[namespace]
      }).then(() => (changes(db, filter, f, params)))
    }

    if(err.status === 409) {
      setTimeout(() => {
        changes(db, filter, f, params)
      })
    }
  })
}

export default filters
