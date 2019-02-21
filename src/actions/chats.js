/*
 * action types
 */

export const ADD_CHAT = "UPDATE_MESSAGES"

/*
 * action creators
 */

export function createChat({chatId, title, color}) {
  return { type: ADD_CHAT, payload: { chat: { id: chatId, label: title, color: color } } }
}
