import { connect } from 'react-redux'
import PouchStore from '../components/pouchStore'
import { initPouch } from '../actions/init'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  initStore: () => {
    dispatch(initPouch())
  }
})

const PouchStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PouchStore)

export default PouchStoreContainer
