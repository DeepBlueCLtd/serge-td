import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import styles from './styles'
import PerfectScrollbar from 'react-perfect-scrollbar'

class ChatMessages extends Component {
  constructor(props, content) {
    super(props, content)

    this.colorScheme = {
      red: "bg-danger",
      blue: "bg-primary",
      white: "bg-secondary"
    }

    this.timeId = null
    this.scrolledDown = true
    this.scrollbar = createRef()

    this.onScrollUp = this.onScrollUp.bind(this)
    this.onYReachEnd = this.onYReachEnd.bind(this)
    this.scrollToDown = this.scrollToDown.bind(this)
  }

  onScrollUp() {
    this.scrolledDown = false
  }

  onYReachEnd() {
    this.scrolledDown = true
  }

  scrollToDown() {
    if(this.timeId)
      clearTimeout(this.timeId)

    this.timeId = setTimeout(() => {
      if(this.scrolledDown) {
        this.scrollbar.current._container.scrollTop = this.scrollbar.current._container.scrollHeight
      }
    })
  }

  componentWillReceiveProps() {
    this.scrollToDown()
  }

  renderItem(message) {
    const fromChat = message.from === this.props.chatId

    let color = this.colorScheme[message.from]
    let itemStyles = {}

    if(fromChat) {
      itemStyles = { textAlign: 'right' }
    }

    return(
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

  render() {
    return (
      <div className={css(styles.main)}>
        <div className={css(styles.scrollbar)}>
          <PerfectScrollbar
            ref={this.scrollbar}
            onYReachEnd={this.onYReachEnd}
            onScrollUp={this.onScrollUp}
            suppressScrollX={true}
            className={css(styles.container)}
            contentClassName={css(styles.scrolContent)}
          >
            <div className={css(styles.scrolContent)}>
              {this.props.messages.map((msg, key) => (
                <div key={key}>{this.renderItem(msg)}</div>
              ))}
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    )
  }
}

ChatMessages.propTypes = {
  messages: PropTypes.array,
  chatId: PropTypes.string.isRequired
}

ChatMessages.defaultValues = {
  messages: []
}

export default ChatMessages
