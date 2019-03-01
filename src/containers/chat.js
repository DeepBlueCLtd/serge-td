import { connect } from 'react-redux'
import Chat from '../components/chat'
import { createMessages, updateMessages } from '../actions/messages'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => {

  return {
    createMessage: (message) => {
      dispatch(createMessages([message]))
    },
    updateMessages: (messages, chatId) => {
      dispatch(updateMessages(messages, chatId))
    }
  }
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
