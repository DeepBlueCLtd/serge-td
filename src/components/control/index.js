import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button, ListGroup, ListGroupItem } from 'reactstrap'
import JSONEditor from '@json-editor/json-editor'

import { css } from 'aphrodite/no-important'
import styles from './styles'

class ChatControll extends Component {
  constructor(props, content) {
    super(props, content)

    this.chats = [
      {chatId: "red", title:"Red Chat", color: "bg-danger", active: 1},
      {chatId: "blue", title:"Blue Chat", color: "bg-primary", active: 1},
      {chatId: "white", title:"White Chat", color: "bg-primary", active: 1}
    ]
    this.newMessageForm = this.newMessageForm.bind(this)
    this.closeMessageForm = this.closeMessageForm.bind(this)
    this.injectForm = this.injectForm.bind(this)
    this.filterCreateChatBtns = this.filterCreateChatBtns.bind(this)
    this.editor = null
    this.editorRef = React.createRef()

    this.state = {
      activeSchema: null,
      createChats: this.filterCreateChatBtns()
    }
  }

  filterCreateChatBtns() {
    return this.chats
  }

  newMessageForm(e) {
    if(this.state.activeSchema !== e.target.name) {
      if(this.editor)
        this.editor.destroy()

      this.setState({activeSchema: e.target.name})
      this.editor = new JSONEditor(this.editorRef.current, {
        schema: this.props.messageTypes[e.target.name],
        theme: 'bootstrap4'
      })
    }
    else
      this.closeMessageForm()
  }

  closeMessageForm() {
    this.editor.destroy()
    this.setState({activeSchema: null})
  }

  injectForm() {
    if(!(this.editor.validate()).length) {
      this.props.createMessage(this.editor.getValue())
      this.closeMessageForm()
    }
  }

  render() {
    return (
      <div className={css(styles.main)}>
        <Row className="main">
          <Col md={4}>
            <Card>
              <CardHeader>Game Control</CardHeader>
              <CardBody>
                <p>Inject Messages:</p>
                <ListGroup>
                  {this.props.messageTypes.map((schema, key) => (
                    <ListGroupItem
                      key={key}
                      tag="button"
                      active={key === parseInt(this.state.activeSchema)}
                      onClick={this.newMessageForm}
                      name={key}
                    >
                      {schema.title}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
              {this.state.createChats.length && <CardBody>
                <p>Create chats:</p>
                <ListGroup>
                  {this.state.createChats.map((chat, key) => {
                    const active = this.props.chats.includes(chat.chatId)
                    return (
                      <ListGroupItem
                        key={key}
                        tag="button"
                        active={active}
                        onClick={() => {
                          if (active)
                            this.props.removeChat(chat.chatId)
                          else
                            this.props.createChat(chat)
                        }}
                      >
                        {chat.title}
                      </ListGroupItem>
                    )
                  })}
                </ListGroup>
              </CardBody>}
              <CardFooter>
                <Button block color="danger" onClick={this.props.clearMessages}>Clear Messages</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={8}>
            <div className={css(styles.createMessage, this.state.activeSchema && styles.createMessageShow)}>
              <Card>
                <CardBody>
                  <div ref={this.editorRef}/>
                </CardBody>
                <CardFooter>
                  <Button color="success" onClick={this.injectForm}>Inject</Button>
                </CardFooter>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

ChatControll.propTypes = {
  messageTypes: PropTypes.array,
  clearMessages: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  createChat: PropTypes.func.isRequired,
  removeChat: PropTypes.func.isRequired,
  chats: PropTypes.array,
}

export default ChatControll
