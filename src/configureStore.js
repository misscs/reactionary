import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'routes/Root/rootReducer'
import rootSaga from 'routes/Root/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

const enhancers = [
  composeWithDevTools(applyMiddleware(...middlewares))
]

const composedEnhancer = compose(...enhancers)

/**
 * Create the store with middleware
 * @param { object } initialState - initial state
 * @return { object } store - store
 * @todo Check environment and only execute debugEnhancer if in development
 */
export default function configureStore (initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancer
  )

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return store
}
