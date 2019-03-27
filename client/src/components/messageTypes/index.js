import React, { Component } from 'react'
import { booleanOptions } from '../../defaults/jsonEditor'
import { css } from 'aphrodite/no-important'
import styles from './styles'
import jsonMetaSchema from './data.json'
import { Container, Col, Row } from 'reactstrap'
import JSONEditor from '@json-editor/json-editor'
import { SchemaEditor, PreviewEditor } from '../../js-modules/json-schema-editor/editor'
import Editor from './jsonEditor'
import Preview from './editorPreview'
import SchemaView from './metaSchema'

class MessageTypes extends Component {

  constructor(props, content) {
    super(props, content)

    JSONEditor.defaults.options.iconlib = "fontawesome5"
    JSONEditor.defaults.options.theme   = 'bootstrap4'
    this.updateMetaSchema = this.updateMetaSchema.bind(this)
    this.updatePreviewSchema = this.updatePreviewSchema.bind(this)

    this.schemaEditor = null
    this.editorPreview = null

    this.state = {
      booleanOptions: booleanOptions,
      metaSchema: jsonMetaSchema,
      previewSchema: null
    }

  }

  updatePreviewSchema(schema) {
    console.log("preview update");
    this.setState({previewSchema: schema})
  }

  updateMetaSchema(schema) {
    console.log("editor update");
    this.setState({metaschema: schema})
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={6} lg={3}>
            <Editor schema={this.state.metaSchema} onChange={this.updatePreviewSchema}/>
          </Col>
          <Col md={6} lg={3}>
            <Preview schema={this.state.previewSchema}/>
          </Col>
          <Col md={6} lg={3}>
            <SchemaView value={this.state.metaSchema} onSchemaSubmit={this.updateMetaSchema}/>
          </Col>
        </Row>
      </Container>
    )

    return (
      <div className="table">
        <div className="container">
            <h3>Options</h3>
            <div>
                <label style="display:block;">Boolean options:</label>
                <select multiple size="9" id="boolean-options">
                  {booleanOptions.map((option, key) => (
                    <option key={key} selected={option.selected} value={option.value}>{option.label}</option>
                  ))}
                </select>
            </div>
            <div>
                <label>Object layout:</label>
                <select id="object-layout">
                    <option value="normal">normal</option>
                    <option value="grid">grid</option>
                </select>
            </div>
        </div>
      </div>
    )
  }
}
/*

function updateBooleanOptions() {
    var options = document.getElementById('boolean-options').children;
    for(var i = 0; i < options.length; i++) {
        JSONEditor.defaults.options[options[i].value] = options[i].selected;
    }
}

// Setup
document.getElementById('boolean-options').addEventListener('change', function () {
    // Update boolean options for JSONEditor
    updateBooleanOptions();
    reloadEditors();
});

document.getElementById('object-layout').addEventListener('change', function () {
    // Update object layout setting for JSONEditor
    JSONEditor.defaults.options.object_layout = this.value;
    reloadEditors();
});

*/

export default MessageTypes
