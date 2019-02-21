import { connect } from 'react-redux'
import Messages from '../components/chat/messages'

const mapStateToProps = (stage, { chatId }) => {
  return {
    messages: Array.isArray(stage.chat) ? stage.chat.filter((msg) => (msg.from === chatId || msg.to === chatId)) : []
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)

export default MessagesContainer
