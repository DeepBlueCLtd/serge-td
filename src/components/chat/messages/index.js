import React from 'react'
import PropTypes from 'prop-types'

const ChatMessages = ({ messages }) => {

  return (
    <div>
      {messages.map((msg, key) => (
        <div key={key}>{msg.title}</div>
      ))}
    </div>
  )
}

ChatMessages.propTypes = {
  messages: PropTypes.array
}

ChatMessages.defaultValues = {
  messages: []
}

export default ChatMessages
