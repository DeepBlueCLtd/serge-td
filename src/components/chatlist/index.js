import React from 'react'
import { css } from 'aphrodite/no-important';
import styles from './styles'
import { Row, Col } from 'reactstrap'
import Chat from '../../containers/chat'
import { chat as chatSizes } from '../../defaults/schemeSizes'

const Chatlist = ({ chats }) => {
  return (
    <Row>
      {chats.map((chat, key) => (chat &&
        <Col xs={chatSizes.xs} sm={chatSizes.sm} md={chatSizes.md} key={key}>
          <div className={css(styles.chatItem)}>
            <Chat id={chat.id}/>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default Chatlist
