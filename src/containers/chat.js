import { connect } from 'react-redux'
import Chat from '../components/chat'
import { createMessages } from '../actions/messages'

const mapStateToProps = (stage, { id }) => ({
  chatId: id
})

const mapDispatchToProps = dispatch => {

  return {
    createMessage: (message) => {
      dispatch(createMessages([message]))
    }
  }
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
