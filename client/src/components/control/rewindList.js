import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RewindList extends Component {
  render() {
    return(<div/>)
  }
}

RewindList.propTypes = {
  removeRewindPoint: PropTypes.func.isRequired,
  selectRewindPoint: PropTypes.func.isRequired,
  updateRewindPoints: PropTypes.func.isRequired,
  rewinds: PropTypes.array.isRequired
}

export default RewindList
