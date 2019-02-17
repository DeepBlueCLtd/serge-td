import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@json-editor/json-editor/src/styles/starrating.css'
import reducers from './reducers'
import PouchDB from 'pouchdb-browser'
import thunk from 'redux-thunk'
import { persistentStore } from 'redux-pouchdb'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const db = new PouchDB('dbname')

const applyMiddlewares = applyMiddleware(
  thunk
)

const changeHandler = (data) => {
  console.log('PouchDB:', data)
}

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddlewares,
  persistentStore(db, changeHandler)
)(createStore)

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
