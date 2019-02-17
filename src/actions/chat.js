/*
 * action types
 */

export const UPDATE_MESSAGES = "UPDATE_MESSAGES"

/*
 * action creators
 */

export function createMessage(chatId, message) {
  return { type: UPDATE_MESSAGES, payload: { chat: chatId, message: message } }
}

export function editMessage(chatId, key, message) {
  return { type: UPDATE_MESSAGES, payload: { chat: chatId, message: message, key: key } }
}
