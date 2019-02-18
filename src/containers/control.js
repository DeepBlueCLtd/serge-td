import { connect } from 'react-redux'
import { createMessage, removeAllMessages } from '../actions/chat'

import Control from '../components/chat/control'

const mapStateToProps = state => ({messageTypes: state.messageTypes})

const mapDispatchToProps = dispatch => {

  return {
    createMessage: (message) => {
      dispatch(createMessage(message))
    },
    clearMessages: () => {
      dispatch(removeAllMessages())
    }
  }
}

const ControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Control)

export default ControlContainer
