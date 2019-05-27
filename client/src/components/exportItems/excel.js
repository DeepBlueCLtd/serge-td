import React from 'react'
import excellentExport from 'excellentexport';
// import { css } from 'aphrodite/no-important';
// import styles from './styles'
import { Button, ButtonGroup } from 'reactstrap'
// import PropTypes from 'prop-types'

const ExcelExport = ({ exp, index }) => {

  const ids = {
    xlsx: `export_button_${index}_xlsx`,
    xls: `export_button_${index}_xls`,
    csv: `export_button_${index}_csv`
  }

  const generateFile = (format) => {
    return excellentExport.convert({
      anchor: ids[format],
      filename: exp.name,
      format: format,
    }, exp.data.map(dataItem => {
      let fields = []
      if(dataItem.data.length) {
        fields = Object.keys(dataItem.data[0].doc)
      }

      return ({
        name: dataItem.title,
        from: {
          arrayHasHeader: true,
          array: [
            fields.map(fld => (fld.charAt(0).toUpperCase() + fld.slice(1))),
            ...dataItem.data.map(({ doc }) => (fields.map(fld => (doc[fld]))))
          ]
        }
      })
    }))
  }

  return (
    <ButtonGroup>
      <Button
        href='#'
        size='sm'
        color='success'
        onClick={e => (generateFile('xlsx'))}
        id={ids['xlsx']}
      >Download .xlsx</Button>
      <Button
        href='#'
        size='sm'
        color='success'
        onClick={e => (generateFile('xls'))}
        id={ids['xls']}
      >Download .xls</Button>
    </ButtonGroup>
  )
}

ExcelExport.propTypes = {

}

export default ExcelExport
