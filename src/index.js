import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './configureStore'
import rootRoute from 'routes/Root'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Router
        history={history}
        routes={rootRoute}
      />
    </AppContainer>
  </Provider>
  ,
  document.getElementById('root')
)
