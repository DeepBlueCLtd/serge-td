import { connect } from 'react-redux'
import RewindList from '../components/control/rewindList'
import { removeRewindPoint, selectRewindPoint, updateRewindPoints } from '../actions/rewindPoints'

const mapStateToProps = (state) => ({
  rewinds: state.rewindPoints.points,
  active: state.rewindPoints.activeRewind,
})

const mapDispatchToProps = dispatch => ({
  updateRewindPoints: (points) => {
    dispatch(updateRewindPoints(points))
  },
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
