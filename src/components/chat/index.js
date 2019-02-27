import React from 'react'
import { Card, CardHeader, CardFooter, CardBody, Button, InputGroup, InputGroupAddon  } from 'reactstrap'
import PropTypes from 'prop-types'
import JSONEditor from '@json-editor/json-editor'
import Messages from '../../containers/messages'
import ChatColorScheme from '../../defaults/schemeColors/chatScheme'
import { css } from 'aphrodite/no-important'
import styles from './styles'

const Chat = ({ chatId, createMessage, label, form }) => {

  const colorScheme = (new ChatColorScheme(chatId)).getScheme()

  let editor = null
  let holderRef = null
  let submitRef = null

  const addBtnClick = () => {
    submitRef.style.display = 'block'
    if(editor)
      editor.destroy()

    editor = new JSONEditor(holderRef, {
      schema: form,
      theme: 'bootstrap4'
    })
  }

  const sendMessage = () => {
    let errors = editor.validate()
    if(!errors.length) {
      createMessage(editor.getValue())
      editor.destroy()
      submitRef.style.display = 'none'
    }
  }

  return (
    <Card>
      <CardHeader className={colorScheme.item.bg}>
        <div className={css(styles.labelContainer)}>
          <div className={css(styles.label)}>
            <Button color="link" className={css(styles.labelButton)}>
              <strong className={colorScheme.item.text}>{label}</strong>
            </Button>
          </div>
        </div>
        <Button color={colorScheme.item.btn} onClick={addBtnClick}>Add >></Button>
      </CardHeader>
      <CardBody className={colorScheme.global.body}>
        <div className="messages">
          <Messages chatId={chatId}/>
        </div>
      </CardBody>
      <CardFooter className={colorScheme.global.footer}>
        <div ref={holder => { holderRef = holder }}/>
        <div style={{display: 'none'}} ref={submit => { submitRef = submit }}>
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

Chat.propTypes = {
  chatId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  createMessage: PropTypes.func.isRequired
}

export default Chat
