import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button, ListGroup, ListGroupItem } from 'reactstrap'
import JSONEditor from '@json-editor/json-editor'

import { css } from 'aphrodite/no-important'
import styles from './styles'
import formSchema, { schemaKeys } from './form'

class ChatControll extends Component {
  constructor(props, content) {
    super(props, content)

    this.state = {
      activeSchema: null,
    }

    this.newMessageForm = this.newMessageForm.bind(this)
    this.closeMessageForm = this.closeMessageForm.bind(this)
    this.injectForm = this.injectForm.bind(this)
    this.editor = null
    this.editorRef = React.createRef()
  }

  newMessageForm(e) {
    if(this.state.activeSchema !== e.target.name) {
      if(this.editor)
        this.editor.destroy()

      this.setState({activeSchema: e.target.name})
      this.editor = new JSONEditor(this.editorRef.current, {
        schema: formSchema(e.target.name),
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
                  {schemaKeys.map(schema => (
                    <ListGroupItem
                      key={schema}
                      tag="button"
                      active={schema === this.state.activeSchema}
                      onClick={this.newMessageForm}
                      name={schema}
                    >
                      {schema}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
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
  clearMessages: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired
}

export default ChatControll
