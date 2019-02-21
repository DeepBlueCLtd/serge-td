import { connect } from 'react-redux'
import Chat from '../components/chat'
import { createMessage } from '../actions/messages'

const mapStateToProps = (stage, { id }) => {

  let chatId = id || 'default'

  return {
    chatId: chatId,
    colorScheme: chatId + '-theme'
  }
}

const mapDispatchToProps = dispatch => {

  return {
    createMessage: (message) => {
      dispatch(createMessage(message))
    }
  }
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
