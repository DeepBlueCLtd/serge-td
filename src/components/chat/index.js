import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import PropTypes from 'prop-types'
import Messages from '../../containers/messages'
import ChatColorScheme from '../../defaults/schemeColors/chatScheme'
import getDb from '../../databases'
import { query } from '../../databases/views'
import { changes } from '../../databases/filters'

import Header from '../../containers/chat/header'
import Footer from '../../containers/chat/footer'

class Chat extends Component {
  constructor(props, content) {
    super(props, content)
    this.changeTimer = null
    this.changeTime = 128
    this.updateState = this.updateState.bind(this)
    this.colorScheme = (new ChatColorScheme(props.chatId)).getScheme()
    this.db = getDb('messages')
  }

  componentWillMount() {
    this.updateState(() => {
      changes(this.db, 'messages/' + this.props.chatId, () => {
        this.updateState()
      })
    })
  }

  updateState = (f) => {
    if(this.changeTimer) clearTimeout(this.changeTimer)
    this.changeTimer = setTimeout(() => {
      query(this.db, 'messages/' + this.props.chatId, {include_docs: true}).then(({rows}) => {
        this.props.updateMessages(rows || [], this.props.chatId)
        if(typeof f === 'function') f()
      })
    }, this.changeTime)
  }

  render() {
    return (
      <Card>
        <Header colorScheme={this.colorScheme} button="Add >>" chatId={this.props.chatId}>{this.props.label}</Header>
        <CardBody className={this.colorScheme.global.body}>
          <div className="messages">
            <Messages chatId={this.props.chatId}/>
          </div>
        </CardBody>
        <Footer colorScheme={this.colorScheme} button="Send" chatId={this.props.chatId}/>
      </Card>
    )
  }
}

Chat.propTypes = {
  chatId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  updateMessages: PropTypes.func.isRequired
}

export default Chat
