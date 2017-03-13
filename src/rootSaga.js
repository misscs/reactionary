import { call, put, takeLatest } from 'redux-saga/effects'

import { login } from 'routes/Login/LoginSaga'
import { getReposFlow } from 'routes/Dashboard/DashboardSaga'

import LoginTypes from 'routes/Login/LoginRedux'
import API from './api'

const api = API.create()

/**
 * Sagas to be launched at app startup.
 */
const rootSaga = function* () {
  yield [
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(LoginTypes.SET_TOKEN, getReposFlow, api),
  ]
}

export default rootSaga
