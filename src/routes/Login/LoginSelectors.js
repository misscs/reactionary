/**
 * Login page selectors
 */

import { createSelector } from 'reselect'

const getLogin = (state) => state.login

const getUsername = () => createSelector(
  getLogin,
  (loginState) => loginState.username
)

const getIsFetching = () => createSelector(
  getLogin,
  (loginState) => loginState.isFetching
)

const getLoggedIn = () => createSelector(
  getLogin,
  (loginState) => loginState.loggedIn
)

export {
  getLogin,
  getUsername,
  getIsFetching,
  getLoggedIn
}
