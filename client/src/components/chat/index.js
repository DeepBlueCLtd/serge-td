import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import PropTypes from 'prop-types'
import Messages from '../../containers/messages'
import ChatColorScheme from '../../defaults/schemeColors/chatScheme'
import getDb from '../../databases'
import { query } from '../../databases/views'
import { changes, prefix } from '../../databases/filters'
import { dbOptions } from '../../databases'

import Header from '../../containers/chat/header'
import Footer from '../../containers/chat/footer'

class Chat extends Component {
  constructor(props, content) {
    super(props, content)
    this.changeTimer = null
    this.changeTime = 128
    this.updateState = this.updateState.bind(this)
    this.initDatabase = this.initDatabase.bind(this)
    this.dbName = 'messages'
    this.db = null
    this.changes = null

    this.state = {
      colorScheme: (new ChatColorScheme(props.chatId)).getScheme()
    }
  }

  componentWillMount() {
    this.initDatabase(this.props.chatId, this.props.activeRewind)
  }

  componentWillReceiveProps(props) {
    this.initDatabase(props.chatId, props.activeRewind)
  }

  initDatabase(chatId, activeRewind) {
    const isActiveRewind = activeRewind && activeRewind.doc.local !== this.dbName
    let newDb = !this.db
    if(this.props.chatId !== chatId || isActiveRewind || newDb || this.props.activeRewind && !activeRewind) {
      if(this.changes) this.changes.cancel()

      if(isActiveRewind) {
        this.dbName = activeRewind.doc.local
        this.db = getDb(this.dbName, false, {
          ...dbOptions.messages,
          name: activeRewind.doc.local,
          remote: dbOptions.messages.remote ? dbOptions.messages.remote.replace("messages", this.dbName) : null
        })
        newDb = true
      }
      else {
        if(newDb || this.dbName !== 'messages') {
          newDb = true
          this.dbName = 'messages'
          this.db = getDb(this.dbName)
        }
      }

      if(newDb) {
        this.updateState()
      }

      this.changes = changes(this.db, 'messages/' + chatId).on('change', () => {
        this.updateState()
      })
      this.setState({colorScheme: (new ChatColorScheme(chatId)).getScheme()})
    }
  }

  componentWillUnmount() {
    this.changes.cancel()
    clearTimeout(this.changeTimer)
  }

  updateState = (f) => {
    if(this.changeTimer) clearTimeout(this.changeTimer)
    this.changeTimer = setTimeout(() => {
      console.log(this.db);
      query(this.db, 'messages/' + this.props.chatId, {
        include_docs: true,
        filter: prefix + 'messages/' + this.props.chatId
      }).then(({rows}) => {
        console.log(rows);
        this.props.updateMessages(rows || [], this.props.chatId)
        if(typeof f === 'function') f()
      })
    }, this.changeTime)
  }

  render() {
    return (
      <Card>
        <Header colorScheme={this.state.colorScheme} button="Add >>" chatId={this.props.chatId}>{this.props.label}</Header>
        <CardBody className={this.state.colorScheme.global.body}>
          <Messages chatId={this.props.chatId}/>
        </CardBody>
        <Footer colorScheme={this.state.colorScheme} button="Send" chatId={this.props.chatId}/>
      </Card>
    )
  }
}

Chat.propTypes = {
  chatId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  updateMessages: PropTypes.func.isRequired,
  activeRewind: PropTypes.object
}

export default Chat
