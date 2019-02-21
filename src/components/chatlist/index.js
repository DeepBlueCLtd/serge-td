import React from 'react'
import { css } from 'aphrodite/no-important';
import styles from './styles'
import { Container, Row, Col } from 'reactstrap'
import Chat from '../../containers/chat'
import Control from '../../containers/control'

const Chatlist = () => {
  return (
    <Row>
      <Col md={6}>
        <div className={css(styles.chatItem)}>
          <Chat id="blue"/>
        </div>
      </Col>
    </Row>
  )
}

export default Chatlist
