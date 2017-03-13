import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import {
  loadReposSuccess,
  loadReposFailure,
  initialState,
  dashboardReducer
} from '../DashboardRedux'

import Types from '../DashboardRedux'

describe('Dashboard actions', () => {
  it('should return type LOAD_REPOS_SUCCESS and repos', () => {
    const repos = []

    const expectedAction = {
      type: Types.LOAD_REPOS_SUCCESS,
      repos
    }
    expect(loadReposSuccess(repos)).toEqual(expectedAction)
  })

  it('should return type LOAD_REPOS_FAILURE and the error', () => {
    const error = 'Whoops, no cat repos here'

    const expectedAction = {
      type: Types.LOAD_REPOS_FAILURE,
      error
    }
    expect(loadReposFailure(error)).toEqual(expectedAction)
  })
})

describe('Dashboard reducer', () =>{

  let initializedState
  beforeEach(() => {
    initializedState = initialState
  })

  it('should return the initial state', () => {
    const expectedState = initializedState
    expect(dashboardReducer(undefined, {})).toEqual(expectedState)
  })

  it(`should handle the loadReposSuccess action correctly`, () => {
    const repos = {
      data: [
        "octocat"
      ]
    }

    const state = dashboardReducer(
      initializedState,
      loadReposSuccess(repos)
    )

    const expectedState = {
      ...initializedState,
      repos: repos.data
    }

    expect(state).toEqual(expectedState)
  })

  it(`should handle the loadReposFailure action correctly`, () => {
    const error = "Whoops, a problem."

    const state = dashboardReducer(
      initializedState,
      loadReposFailure(error)
    )

    const expectedState = {
      ...initializedState,
      error
    }

    expect(state).toEqual(expectedState)
  })
})
