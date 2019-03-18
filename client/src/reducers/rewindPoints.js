import getDb from '../databases'
import { CREATE_REWIND_POINT, REMOVE_REWIND_POINT, SELECT_REWIND_POINT, UPDATE_REWIND_POINTS } from '../actions/rewindPoints'

const db = getDb("rewind-points")

const initialState = {
  points: [],
  activeRewind: null
}

const rewindPoints = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_REWIND_POINT:
    console.log(action.payload);
      return state
    case REMOVE_REWIND_POINT:
      return state
    case SELECT_REWIND_POINT:
      return state
    case UPDATE_REWIND_POINTS:
      return state
    default:
      return state
  }
}


export default rewindPoints
