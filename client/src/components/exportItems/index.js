import React from 'react'
import { css } from 'aphrodite/no-important';
import styles from './styles'
import { Container, Card, CardHeader, Button, ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import ExcelExport from './excel'

const Export = ({ messageTypes, chats, exportItems, createExport, removeExports }) => {
  return (
    <Container fluid>
      <div className={css(styles.main)}>
        <h3 className={css(styles.pageTitle)}>
          Exports:
          <div className="float-right">
            <ButtonGroup>
              <Button color="primary" onClick={() => {createExport(messageTypes)}}>Create Export</Button>
              <Button color="danger" onClick={removeExports}>Clear Export History</Button>
            </ButtonGroup>
          </div>
        </h3>
        {exportItems.map((exp, key) => (
          <div className={css(styles.item)} key={key}>
            <Card>
              <CardHeader>
                <div className={css(styles.title)}>{exp.name}</div>
                <div className="float-right">
                  <ExcelExport exp={exp} index={key}/>
                </div>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  )
}

Export.propTypes = {
  messageTypes: PropTypes.array,
  createExport: PropTypes.func.isRequired,
  removeExports: PropTypes.func.isRequired,
  exportItems: PropTypes.array,
  chats: PropTypes.array,
}

export default Export
