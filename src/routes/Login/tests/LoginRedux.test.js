import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import {
  changeUsername,
  loginRequest,
  loginSuccess,
  loginFailure,
  initialState,
  loginReducer
} from '../LoginReducer'

import Types from '../LoginReducer'

import configureStore from "configureStore"


describe('Login actions', () => {
  it('should return type CHANGE_USERNAME and passed name', () => {
    const username = 'Octocat'

    const expectedAction = {
      type: Types.CHANGE_USERNAME,
      username
    }
    expect(changeUsername(username)).toEqual(expectedAction)
  })


  it('should return type LOGIN_REQUEST', () => {
    const data = 'Octocat'

    const expectedAction = {
      type: Types.LOGIN_REQUEST
    }
    expect(loginRequest(data)).toEqual(expectedAction)
  })

  it('should return type LOGIN_SUCCESS and the data', () => {
    const expectedAction = {
      type: Types.LOGIN_SUCCESS
    }
    expect(loginSuccess()).toEqual(expectedAction)
  })

  it('should return type LOGIN_ERROR and the error', () => {
    const error = 'Whoops, no cats here'
    const expectedAction = {
      type: Types.LOGIN_FAILURE,
      error
    }
    expect(loginFailure(error)).toEqual(expectedAction)
  })
})

describe('Login reducer', () =>{

  let initializedState
  beforeEach(() => {
    initializedState = initialState
  })

  it('should return the initial state', () => {
    const expectedState = initializedState
    expect(loginReducer(undefined, {})).toEqual(expectedState)
  })

  it(`should handle the changeUsername action correctly`, () => {
    const username = 'Octo'

    const state = loginReducer(
      initializedState,
      changeUsername(username)
    )

    const expectedState = {
      ...initializedState,
      username
    }

    expect(state).toEqual(expectedState)
  })

  it(`should handle the loginRequest action correctly`, () => {
    const state = loginReducer(
      initializedState,
      loginRequest()
    )

    const expectedState = {
      ...initializedState,
      isFetching: true
    }

    expect(state).toEqual(expectedState)
  })

  it(`should handle the loginSuccess action correctly`, () => {
    const state = loginReducer(
      initializedState,
      loginSuccess()
    )

    const expectedState = {
      ...initializedState,
      isFetching: false,
      loggedIn: true
    }

    expect(state).toEqual(expectedState)
  })

  it(`should handle the loginFailure action correctly`, () => {
    const error = "Whoops, a problem."

    const state = loginReducer(
      initializedState,
      loginFailure(error)
    )

    const expectedState = {
      ...initializedState,
      isFetching: false,
      loggedIn: false,
      error
    }

    expect(state).toEqual(expectedState)
  })
})
