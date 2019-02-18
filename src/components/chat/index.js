import React from 'react'
import { Card, CardHeader, CardFooter, CardBody, Button, InputGroup, InputGroupAddon  } from 'reactstrap'
import PropTypes from 'prop-types'
import formSchema from './schema'
import JSONEditor from '@json-editor/json-editor'
import Messages from '../../containers/messages'

const Chat = ({ chatId, colorScheme, createMessage }) => {

  let editor = null
  let holderRef = null
  let submitRef = null
  let backgroundClass = ""

  switch (colorScheme) {
    case 'red-theme':
      backgroundClass = "bg-danger"
      break;
    case 'blue-theme':
      backgroundClass = "bg-primary"
      break;
    default:
      backgroundClass = "bg-default"
  }

  const addBtnClick = () => {
    submitRef.style.display = 'block'
    if(editor)
      editor.destroy()

    editor = new JSONEditor(holderRef, {
      schema: formSchema(chatId),
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
      <CardHeader className={backgroundClass}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button onClick={addBtnClick}>Add >></Button>
          </InputGroupAddon>
        </InputGroup>
      </CardHeader>
      <CardBody>
        <div className="messages">
          <Messages chatId={chatId}/>
        </div>
      </CardBody>
      <CardFooter>
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
  colorScheme: PropTypes.string,
  createMessage: PropTypes.func.isRequired
}

export default Chat
