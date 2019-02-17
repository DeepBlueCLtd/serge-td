import { connect } from 'react-redux'
import Messages from '../components/chat/messages'

const mapStateToProps = (stage, { chatId }) => {
  return {
    messages: stage.chat.messages.filter((msg) => (msg.from === chatId || msg.to === chatId))
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)

export default ChatContainer
