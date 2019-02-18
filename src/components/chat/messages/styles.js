import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  main: {
    height: '320px',
    overflow: 'hidden',
    position: 'relative'
  },
  container: {
    position: 'absolute',
    maxHeight: '100%',
    left: '0',
    bottom: '0',
    width: '100%'
  },
  item: {
    display: 'inline-block',
    verticalAligin: 'top',
  },
  scrolContent: {
    paddingRight: '10px'
  },
  badge: {
    fontSize: '16px',
    lineHeight: '1.2',
    padding: '5px 15px',
    borderRadius: '55555px 0 55555px 55555px',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAligin: 'top',
    opacity: '0.9',
    color: '#fff',
    ':hover': {
      opacity: '1'
    }
  },
  badgeLeft: {
    borderRadius: '0 55555px 55555px 55555px',
  },
  badgeBg: {
    opacity: '0.8',
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '100%',
    width: '100%'
  },
  message: {
    position: 'relative'
  }
})
