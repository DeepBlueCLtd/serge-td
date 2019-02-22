/*
 * action types
 */

export const PUSH_MESSAGES = "PUSH_MESSAGES"
export const REMOVE_ALL_MESSAGES = "REMOVE_ALL_MESSAGES"
export const GENERATE_RANDOM_MESSAGES = "PUSH_MESSAGES"

/*
 * action creators
 */

export function createMessages(messages) {
  return { type: PUSH_MESSAGES, payload: { messages: messages } }
}

export function removeAllMessages() {
  return { type: REMOVE_ALL_MESSAGES }
}
