import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { SchemaEditor } from '../../js-modules/json-schema-editor/editor'
import PropTypes from 'prop-types'

class JsonSchemaEditor extends Component {

  constructor(props, content) {
    super(props, content)

    this.schemaEditor = null
    this.editorBox = React.createRef()
    this.onChange = this.onChange.bind(this)
    this.updateEditor = this.updateEditor.bind(this)
    this.saved = ""
  }

  onChange(newValue, e) {
    const errors = this.schemaEditor.validate()
    if(errors.length) {
      alert('Invalid schema')
    }
    else {
      if(this.props.onChange) {
        this.props.onChange(this.schemaEditor.getJSON())
      }
    }
  }

  componentDidMount() {
    this.schemaEditor = new SchemaEditor('schema-editor')
    this.updateEditor(this.props.schema)
  }

  componentWillReceiveProps({schema}) {
      this.updateEditor(schema)
  }

  updateEditor(schema) {


    try {
      const newJson = JSON.stringify(schema)
      if(newJson !== this.save) {
        this.save = newJson
        this.schemaEditor.updateSchema(schema)
        this.schemaEditor.jsonEditor.on('change', this.onChange)
      }
    }
    catch(err) {
      alert('Invalid json schema')
      console.log(err)
    }
  }

  render () {
    return (
      <Card>
        <CardHeader>
          Schema Editor
        </CardHeader>
        <CardBody>
          <div id="schema-editor"/>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    )
  }
}

JsonSchemaEditor.propTypes = {
  schema: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

export default JsonSchemaEditor
