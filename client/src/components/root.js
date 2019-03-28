import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './homepage'
import JsonSchemaEditor from './jsonSchemaEditor'
import CheckDb from './checkDb'
import PouchStore from '../containers/pouchStore'

const Root = ({ store }) => (
  <Provider store={store}>
    <PouchStore>
      <CheckDb>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/json-schema-editor" component={JsonSchemaEditor} />
          </Switch>
        </Router>
      </CheckDb>
    </PouchStore>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
