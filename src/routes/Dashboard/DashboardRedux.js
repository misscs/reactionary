/**
 * Dashboard redux setup
 * Exports Dashboard constants, action creators, and reducers
 */

import { createTypes } from 'reduxsauce'

/* ------------- Types ------------- */
const Types = createTypes(`
  LOAD_REPOS_SUCCESS
  LOAD_REPOS_FAILURE
`, {}) // options - the 2nd parameter is optional

export default Types

/* ------------- Action Creators ------------- */

export const loadReposSuccess = function(repos) {
  return {
    type: Types.LOAD_REPOS_SUCCESS,
    repos
  }
}

export const loadReposFailure = function(error) {
  return {
    type: Types.LOAD_REPOS_FAILURE,
    error
  }
}




/* ------------- Initial State ------------- */
export const initialState = {
  repos: [],
  error: null
}

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_REPOS_SUCCESS:
      return {...state, repos: action.repos.data }
    case Types.LOAD_REPOS_FAILURE:
      return {...state, error: action.error }
    default:
      return state
  }
}
