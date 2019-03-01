import { connect } from 'react-redux'
import Messages from '../components/chat/messages'

const mapStateToProps = (stage, { chatId }) => {
  return {
    messages: (stage.messages && Array.isArray(stage.messages[chatId])) ? stage.messages[chatId] : [],
    chatId: chatId
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
