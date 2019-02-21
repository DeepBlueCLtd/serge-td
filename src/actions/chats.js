/*
 * action types
 */

export const ADD_CHAT = "ADD_CHAT"
export const REMOVE_CHAT = "REMOVE_CHAT"

/*
 * action creators
 */

export function createChat({chatId, title, color}) {
  return { type: ADD_CHAT, payload: { chat: { id: chatId, label: title, color: color } } }
}

export function removeChat(chatId) {
  return { type: REMOVE_CHAT, payload: chatId } 
}
