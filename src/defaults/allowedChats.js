const defaultOptions = {
  showOnGameControlCreateChats: true,
  addChatIdToChatToFromArray: true
}

const chats = [
  {
    chatId: "red",
    title:"Red Chat",
    color: "bg-danger",
    options: {
      ...defaultOptions
    }
  },
  {
    chatId: "blue",
    title:"Blue Chat",
    color: "bg-primary",
    options: {
      ...defaultOptions
    }
  },
  {
    chatId: "white",
    title:"White Chat",
    color: "bg-default",
    options: {
      ...defaultOptions
    }
  }
]

export const getToFromKeys = () => {
  return chats
          .filter(chat => chat.options.addChatIdToChatToFromArray)
          .map(chat => chat.chatId)
}

export const getGameControlChats = () => {
  return chats
          .filter(chat => chat.options.showOnGameControlCreateChats)
}

export default chats
