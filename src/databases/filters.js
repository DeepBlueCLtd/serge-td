/* pouchdb filter management
 */

// declare the filters
const filters = {
  messages: {
    red: (doc => (doc.to === 'red' || doc.from === 'red')).toString(),
    blue: (doc => (doc.to === 'blue' || doc.from === 'blue')).toString(),
    white: (doc => (doc.from === 'white')).toString()
  }
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
