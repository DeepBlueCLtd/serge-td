import { connect } from 'react-redux'
import Chat from '../../components/chat'
import { updateMessages } from '../../actions/messages'

const mapStateToProps = (state) => ({
  activeRewind: state.rewindPoints.points.filter(point => point.doc.active)[0]
})

const mapDispatchToProps = dispatch => ({
  updateMessages: (messages, chatId) => {
    dispatch(updateMessages(messages, chatId))
  }
})

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
