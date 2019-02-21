import React from 'react'
import { css } from 'aphrodite/no-important';
import styles from './styles'
import { Row, Col } from 'reactstrap'
import Chat from '../../containers/chat'

const Chatlist = ({ chats }) => {
  return (
    <Row>
      {chats.map(chat => (
        <Col md={6}>
          <div className={css(styles.chatItem)}>
            <Chat id={chat.id}/>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default Chatlist
