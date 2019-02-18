import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import styles from './styles'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ChatMessages = ({ messages, chatId }) => {

  const schemes = {
    red: {
      chatColor: "bg-danger",
      fromColor: "bg-primary"
    },
    blue: {
      chatColor: "bg-primary",
      fromColor: "bg-danger"
    }
  }

  const Item = message => {

    const fromChat = message.from === chatId

    let color = schemes[chatId].fromColor
    let itemStyles = {}

    if(fromChat) {
      color = schemes[chatId].chatColor
      itemStyles = { textAlign: 'right' }
    }

    return (
      <div style={itemStyles}>
        <div className={css(styles.item)}>
          <div className={css(styles.badge, (!fromChat) && styles.badgeLeft)}>
            <div className={css(styles.badgeBg) + ' ' + color}/>
            <div className={css(styles.message)}>
              {message.title || '(empty message)'}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.scrollbar)}>
        <PerfectScrollbar
          suppressScrollX={true}
          className={css(styles.container)}
          contentClassName={css(styles.scrolContent)}
        >
          <div className={css(styles.scrolContent)}>
            {messages.map((msg, key) => (
              <div key={key}>{Item(msg)}</div>
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  )
}

ChatMessages.propTypes = {
  messages: PropTypes.array,
  chatId: PropTypes.string.isRequired
}

ChatMessages.defaultValues = {
  messages: []
}

export default ChatMessages
