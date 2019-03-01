import React, { Component } from 'react'
import { Card, CardHeader, CardFooter, CardBody, Button, InputGroup, InputGroupAddon  } from 'reactstrap'
import PropTypes from 'prop-types'
import JSONEditor from '@json-editor/json-editor'
import Messages from '../../containers/messages'
import ChatColorScheme from '../../defaults/schemeColors/chatScheme'
import { css } from 'aphrodite/no-important'
import styles from './styles'
import getDb from '../../databases'
import { query } from '../../databases/views'
import { changes } from '../../databases/filters'

class Chat extends Component {
  constructor(props, content) {
    super(props, content)

    this.updateState = this.updateState.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.addBtnClick = this.addBtnClick.bind(this)

    this.colorScheme = (new ChatColorScheme(props.chatId)).getScheme()
    this.db = getDb('messages')
    this.editor = null
    this.holderRef = React.createRef()
    this.submitRef = React.createRef()
    this.changeTimer = null
  }

  addBtnClick() {
    this.submitRef.current.style.display = 'block'

    if(this.editor)
      this.editor.destroy()
    console.log(this.holderRef.current);
    this.editor = new JSONEditor(this.holderRef.current, {
      schema: this.props.form,
      theme: 'bootstrap4'
    })
  }

  componentWillMount() {
    console.log('messages/' + this.props.chatId);

      // this.db.changes({
      //   include_docs: true
      // }).on('change', res => {
      //   this.updateState()
      //   console.log(res);
      // })
    this.updateState(() => {
      changes(this.db, 'messages/' + this.props.chatId, () => {
        console.log("test");
        this.updateState()
      })
    })
  }

  updateState = (f) => {
    if(this.changeTimer) clearTimeout(this.changeTimer)
    query(this.db, 'messages/' + this.props.chatId, {include_docs: true}).then(({rows}) => {
      this.props.updateMessages(rows || [], this.props.chatId)
      if(typeof f === 'function') f()
    })
  }

  sendMessage() {
    const errors = this.editor.validate()
    if(!errors.length) {
      this.props.createMessage(this.editor.getValue())
      this.editor.destroy()
      this.submitRef.current.style.display = 'none'
    }
  }

  render() {
    return (
      <Card>
        <CardHeader className={this.colorScheme.item.bg}>
          <div className={css(styles.labelContainer)}>
            <div className={css(styles.label)}>
              <Button color="link" className={css(styles.labelButton)}>
                <strong className={this.colorScheme.item.text}>{this.props.label}</strong>
              </Button>
            </div>
          </div>
          <Button color={this.colorScheme.item.btn} onClick={this.addBtnClick}>Add >></Button>
        </CardHeader>
        <CardBody className={this.colorScheme.global.body}>
          <div className="messages">
            <Messages chatId={this.props.chatId}/>
          </div>
        </CardBody>
        <CardFooter className={this.colorScheme.global.footer}>
          <div ref={this.holderRef}/>
          <div style={{display: 'none'}} ref={this.submitRef}>
            <Button onClick={this.sendMessage}>Send</Button>
          </div>
        </CardFooter>
      </Card>
    )
  }
}

Chat.propTypes = {
  chatId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  updateMessages: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired
}

export default Chat
