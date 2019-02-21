import { connect } from 'react-redux'
import { createMessage, removeAllMessages } from '../actions/messages'
import { createChat } from '../actions/chats'

import Control from '../components/control'

const mapStateToProps = state => ({
  messageTypes: state.messageTypes,
  chats: state.chats.map((chat) => chat.id)
})

const mapDispatchToProps = dispatch => {

  return {
    createMessage: (message) => {
      dispatch(createMessage(message))
    },
    clearMessages: () => {
      dispatch(removeAllMessages())
    },
    createChat: (chat) => {
      dispatch(createChat(chat))
    }
  }
}

const ControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Control)

export default ControlContainer
