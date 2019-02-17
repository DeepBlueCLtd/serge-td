import React from 'react'
import { css } from 'aphrodite/no-important';
import styles from './styles'
import { Container, Row, Col } from 'reactstrap'
import Chat from '../../containers/chat'

const Homepage = () => {
  return (
    <Container>
      <div className={css(styles.main)}>
        <Row>
          <Col md={6}>
            <Chat id="blue"/>
          </Col>
          <Col md={6}>
            <Chat id="red"/>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            Buttons
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Homepage
