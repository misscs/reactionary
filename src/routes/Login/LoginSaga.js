/**
 * Login flow and user authentication sagas
 */

import { call, put, select } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import {
  loginSuccess,
  loginFailure,
  setToken
} from 'routes/Login/LoginReducer'

const getUsername = state => state.login.username

/**
 * Fetchers
 * @param {string} action - Passes params.id
 */
export function * login (api, action) {
  try {
    const username = yield select(getUsername)
    const data = yield call(api.getUser, username)

    if ( data.status === 200) {
      yield put(loginSuccess(data))
      localStorage.setItem('token', username)
      yield put(setToken(username))
      browserHistory.push('/dashboard')
    } else {
      yield put(loginFailure(data.problem))
    }
  }
  catch (e) {
    yield put(loginFailure(e.message))
  }
}
