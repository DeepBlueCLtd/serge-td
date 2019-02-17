import { connect } from 'react-redux'
import Messages from '../components/chat/messages'

const mapStateToProps = (stage) => {
  return {
    messages: stage.chat.messages,
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
