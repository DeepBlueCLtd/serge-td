import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Root from './components/root'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@json-editor/json-editor/src/styles/starrating.css'
import reducers from './reducers'
import PouchDB from 'pouchdb-browser'

const store = createStore(reducers);
window.DB = new PouchDB('mydb')

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
