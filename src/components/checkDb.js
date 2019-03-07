import React, { Component } from 'react'
import getDb from '../databases'
import { prefix as messagesFilterPrefix, filters as messagesFilters } from '../databases/filters'

class CheckDb extends Component {
  constructor(props, content) {
    super(props, content)

    this.check = this.check.bind(this)
    this.messagesfiltersInitialized = false
    this.state = {
      done: false
    }
  }

  check() {
    if(this.messagesfiltersInitialized) {
      this.setState({done: true})
    }
  }

  componentWillMount() {
    this.checkMessages()
  }

  checkMessages() {
    this.checkFilter(getDb('messages'), messagesFilters, messagesFilterPrefix, Object.keys(messagesFilters))

    // TODO
    // Check views
  }

  checkFilter(db, filters, prefix, filterKeys, currentKey) {

    if(!currentKey) currentKey = 0
    if(!filterKeys.length || filterKeys.length <= currentKey) {
      this.messagesfiltersInitialized = true
      this.check()
      return false
    }

    const docId = '_design/' + prefix + filterKeys[currentKey]

    db.get(docId).then(row => {
      let equal = true
      if(row.filters) {
        Object.keys(filters[filterKeys[currentKey]]).forEach(key => {
          if(!row.filters[key] || filters[filterKeys[currentKey]][key] !== row.filters[key])
            equal = false
        })
      }
      else equal = false

      if(equal) {
        this.checkFilter(db, filters, prefix, filterKeys, currentKey + 1)
      }
      else {
        console.log(`Updateing Filters ${docId}`)
        db.put({
          ...row,
          filters: filters[filterKeys[currentKey]]
        }).then(() => {
          console.log(`Updateing Filters ${docId} (success)`)
          this.checkFilter(db, filters, prefix, filterKeys, currentKey + 1)
        })
      }
    }).catch(({ status, docId }) => {
      if(status === 404) {
        console.log(`Creating Filters ${docId}`)
        db.put({
          _id: docId,
          filters: filters[filterKeys[currentKey]]
        }).then(() => {
          console.log(`Creating Filters ${docId} (success)`)
          this.checkFilter(db, filters, prefix, filterKeys, currentKey + 1)
        })
      }
    })
  }

  render() {
    return (<div>{this.state.done && this.props.children}</div>)
  }
}

export default CheckDb
