import React from 'react'
import PropTypes from 'prop-types'
import { CardFooter, InputGroup, Button, InputGroupAddon, Input } from 'reactstrap'

const RewindForm = ({createRewindPoint}) => {
  let value = ""
  return (
    <CardFooter>
      <InputGroup>
        <Input onChange={event => {value = event.target.value}} placeholder="New rewind point"/>
        <InputGroupAddon addonType="append">
          <Button color="warning" onClick={() => { createRewindPoint(value) }}>Create</Button>
        </InputGroupAddon>
      </InputGroup>
    </CardFooter>
  )
}

RewindForm.propTypes = {
  createRewindPoint: PropTypes.func.isRequired
}

export default RewindForm
