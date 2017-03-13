/**
 * The global state selectors
 * @todo refactor reducers so these apply to global state
 * login reducers should just handle login
 */

import { createSelector } from 'reselect'

const selectGlobal = (state) => state.get('login')

const getIsFetching = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isFetching')
)

const getLoggedIn = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loggedIn')
)


export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocationState,
}
