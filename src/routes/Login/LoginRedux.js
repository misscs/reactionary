import { createTypes } from 'reduxsauce'

/* ------------- Types ------------- */
const Types = createTypes(`
  SET_TOKEN
  CHANGE_USERNAME
  LOGIN_REQUEST
  LOGIN_SUCCESS
  LOGIN_FAILURE
  END_SESSION
`, {}) // options - the 2nd parameter is optional

export default Types

/* ------------- Action Creators ------------- */

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: Types.CHANGE_USERNAME,
    username
  }
}

export const loginRequest = function() {
  return {
    type: Types.LOGIN_REQUEST
  }
}

export const loginSuccess = function() {
  return {
    type: Types.LOGIN_SUCCESS
  }
}

export const loginFailure = function(error) {
  return {
    type: Types.LOGIN_FAILURE,
    error
  }
}


export const setToken = function(token) {
  return {
    type: Types.SET_TOKEN,
    token
  }
}


/* ------------- Initial State ------------- */
export const initialState = {
  loggedIn: false,
  isFetching: false,
  error: null,
  username: null
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
      // should be part of auth. and return the client token
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        loggedIn: true
      }
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        error: action.error
      }
    case Types.SET_TOKEN:
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        username: action.token
      }
    default:
      return state
  }
}
