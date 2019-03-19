import React from 'react'
import PropTypes from 'prop-types'
import {CardBody, ListGroup, ListGroupItem } from 'reactstrap'

import { css } from 'aphrodite/no-important'
import styles from './styles'

const RewindList = ({ rewinds, removeRewindPoint, selectRewindPoint }) => {

  return (
    <CardBody className={css(!rewinds.length && styles.hide)}>
      <p>Rewind Points:</p>
      <ListGroup>
        {rewinds.map(({doc}, key) => (
          <ListGroupItem
            key={key}
            tag="button"
            active={doc.active}
            onClick={() => selectRewindPoint(doc._id)}
          >
            {doc.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>
  )
}

RewindList.propTypes = {
  removeRewindPoint: PropTypes.func.isRequired,
  selectRewindPoint: PropTypes.func.isRequired,
  rewinds: PropTypes.array.isRequired
}

export default RewindList
