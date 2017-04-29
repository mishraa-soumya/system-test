import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import empApp from './reducers'
import App from './App'

let store = createStore(empApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
