/*
 * action types
 */

export const ADD_CHAT = "UPDATE_MESSAGES"

/*
 * action creators
 */

export function createChat(chat) {
  return { type: ADD_CHAT, payload: { chat: chat } }
}
