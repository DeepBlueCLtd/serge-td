/*
 * action types
 */

export const CREATE_EXPORT = "CREATE_EXPORT"
export const REMOVE_EXPORTS = "REMOVE_EXPORTS"

/*
 * action creators
 */

export function createExport(messageTypes) {
  return { type: CREATE_EXPORT, payload: { messageTypes: messageTypes } }
}
export function removeExports() {
  return { type: REMOVE_EXPORTS, payload: {} }
}
