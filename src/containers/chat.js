import { connect } from 'react-redux'
import Chat from '../components/chat'
import { createMessage, editMessage } from '../actions/chat'

const mapStateToProps = (stage, { id }) => {

  let chatId = id || 'default'

  return {
    chatId: chatId,
    colorScheme: chatId + '-theme'
  }
}

const mapDispatchToProps = dispatch => {

  return {
    createMessage: (chatId, message) => {
      dispatch(createMessage(chatId, message))
    },
    editMessage: (chatId, key, message) => {
      dispatch(editMessage(chatId, key, message))
    }
  }
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
