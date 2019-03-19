import React from 'react'
import PropTypes from 'prop-types'

const PouchStore = ({ initStore, children }) => {
  initStore()

  return (
    <div>{children}</div>
  )
}

PouchStore.propTypes = {
  initStore: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default PouchStore
