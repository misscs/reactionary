/**
 * Dashboard sagas
 */

import { call, put, select, fork } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import {
  loadReposSuccess,
  loadReposFailure
} from 'routes/Dashboard/DashboardRedux'

const getUsername = state => state.login.username

export function* getReposFlow (api) {
  try {
    const username = yield select(getUsername)

    const data = yield call(api.getUserRepos, username)

    if ( data.status === 200) {
      yield put(loadReposSuccess(data))
    } else {
      yield put(loadReposFailure(data.problem))
    }
  }
  catch (e) {
    yield put(loadReposFailure(e.message))
  }
}
