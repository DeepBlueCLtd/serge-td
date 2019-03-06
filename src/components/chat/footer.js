import React from 'react'
import PropTypes from 'prop-types'
import { CardFooter } from 'reactstrap'
import DraftForm from './form'

const ChatFooter = ({ button, colorScheme, form, messages, saveDraft, sendDraftMessage }) => {
  return (
    <CardFooter className={colorScheme.global.footer}>
      {messages.map((data, key) => (<DraftForm
        key={key}
        message={data.doc}
        button={button}
        form={form}
        saveDraft={saveDraft}
        sendDraftMessage={sendDraftMessage}
      />))}
    </CardFooter>
  )
}

ChatFooter.propTypes = {
  saveDraft: PropTypes.func.isRequired,
  sendDraftMessage: PropTypes.func.isRequired,
  colorScheme: PropTypes.object.isRequired,
  chatId: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
}

export default ChatFooter
