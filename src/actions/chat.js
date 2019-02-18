/*
 * action types
 */

export const UPDATE_MESSAGES = "UPDATE_MESSAGES"
export const REMOVE_ALL_MESSAGES = "REMOVE_ALL_MESSAGES"

/*
 * action creators
 */

export function createMessage(message) {
  return { type: UPDATE_MESSAGES, payload: { message: message } }
}

export function removeAllMessages() {
  return { type: REMOVE_ALL_MESSAGES }
}
