import { connect } from 'react-redux'
import Chats from '../components/chatlist'
// import { createChat } from '../actions/chat'

const mapStateToProps = stage => ({chats:stage.chats})

const mapDispatchToProps = dispatch => ({})

// createMessage: (message) => {
//   // dispatch(createMessage(message))
// }

const ChatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats)

export default ChatsContainer
