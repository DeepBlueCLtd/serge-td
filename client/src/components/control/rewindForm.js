import React from 'react'
import PropTypes from 'prop-types'
import { CardFooter, InputGroup, Button, InputGroupAddon, Input } from 'reactstrap'

const RewindForm = ({createRewindPoint}) => {
  const input = React.createRef()

  const onFormSubmit = e => {
    e.preventDefault()

    if(input.current.value && input.current.value.length) {
      createRewindPoint(input.current.value)
      input.current.value = ""
    }
  }

  return (
    <CardFooter>
      <form onSubmit={onFormSubmit}>
        <InputGroup>
          <Input innerRef={input} placeholder="New rewind point"/>
          <InputGroupAddon addonType="append">
            <Button color="warning">Create</Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </CardFooter>
  )
}

RewindForm.propTypes = {
  createRewindPoint: PropTypes.func.isRequired
}

export default RewindForm
