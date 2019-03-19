import { UPDATE_REWIND_POINTS } from '../actions/rewindPoints'

const initialState = {
  points: [],
  activeRewind: null
}

const rewindPoints = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_REWIND_POINTS:
      return {
        ...state,
        points: action.payload.points
      }
    default:
      return state
  }
}

export default rewindPoints
