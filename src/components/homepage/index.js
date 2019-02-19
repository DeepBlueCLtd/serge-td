import React from 'react'
import { css } from 'aphrodite/no-important';
import styles from './styles'
import { Container, Row, Col } from 'reactstrap'
import Chat from '../../containers/chat'
import Control from '../../containers/control'

const Homepage = () => {
  return (
    <Container fluid>
      <div className={css(styles.main)}>
        <Row>
          <Col md={6}>
            <Chat id="blue"/>
          </Col>
          <Col md={6}>
            <Chat id="red"/>
          </Col>
        </Row>
        <Control/>
      </div>
    </Container>
  )
}

export default Homepage
