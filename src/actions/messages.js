/*
 * action types
 */

export const PUSH_MESSAGES = "PUSH_MESSAGES"
export const REMOVE_ALL_MESSAGES = "REMOVE_ALL_MESSAGES"
export const GENERATE_RANDOM_MESSAGES = "PUSH_MESSAGES"
export const UPDATE_MESSAGES = "UPDATE_MESSAGES"

/*
 * action creators
 */

export function createMessages(messages) {
  return { type: PUSH_MESSAGES, payload: { messages: messages } }
}

export function removeAllMessages() {
  return { type: REMOVE_ALL_MESSAGES }
}

export function updateMessages(messages, chatId) {
  return { type: UPDATE_MESSAGES, payload: { messages: messages, chatId: chatId} }
}
