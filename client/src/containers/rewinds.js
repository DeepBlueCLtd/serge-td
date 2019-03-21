import { connect } from 'react-redux'
import RewindList from '../components/control/rewindList'
import { removeRewindPoint, selectRewindPoint } from '../actions/rewindPoints'

const mapStateToProps = (state) => ({
  rewinds: state.rewindPoints.points,
  active: state.rewindPoints.activeRewind,
})

const mapDispatchToProps = dispatch => ({
  removeRewindPoint: (id) => {
    dispatch(removeRewindPoint(id))
  },
  selectRewindPoint: (id) => {
    dispatch(selectRewindPoint(id))
  },
})

const RewindsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RewindList)

export default RewindsContainer
