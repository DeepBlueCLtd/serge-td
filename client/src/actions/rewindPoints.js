/*
 * action types
 */
export const CREATE_REWIND_POINT = "CREATE_REWIND_POINT"
export const REMOVE_REWIND_POINT = "REMOVE_REWIND_POINT"
export const SELECT_REWIND_POINT = "SELECT_REWIND_POINT"
export const UPDATE_REWIND_POINTS = "UPDATE_REWIND_POINTS"

/*
 * action creators
 */

export function createRewindPoint(pointName, database) {
  return { type: CREATE_REWIND_POINT, payload: { name: pointName, db: database }}
}

export function removeRewindPoint(pointId) {
  return { type: REMOVE_REWIND_POINT, payload: { id: pointId } }
}

export function selectRewindPoint(pointId) {
  return { type: SELECT_REWIND_POINT, payload: { id: pointId } }
}

export function updateRewindPoints(points) {
  return { type: UPDATE_REWIND_POINTS, payload: { points: points } }
}
