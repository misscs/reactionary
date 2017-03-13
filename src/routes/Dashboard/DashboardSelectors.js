/**
 * Dashboard page selectors
 */

import { createSelector } from 'reselect'

const getDashboard = (state) => state.dashboard

const getRepos = () => createSelector(
  getDashboard,
  (dashboardState) => dashboardState.repos
)


export {
  getDashboard,
  getRepos
}
