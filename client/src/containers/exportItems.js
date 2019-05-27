import { connect } from 'react-redux'
import { createExport, removeExports } from '../actions/exportItems'

import ExportItems from '../components/exportItems'

const mapStateToProps = state => ({
  messageTypes: state.messageTypes,
  chats: state.chats.map((chat) => chat && chat.id),
  exportItems: state.exportItems
})

const mapDispatchToProps = dispatch => {

  return {
    createExport: (messageTypes) => {
      dispatch(createExport(messageTypes))
    },
    removeExports: () => {
      dispatch(removeExports())
    }
  }
}

const ExportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportItems)

export default ExportContainer
