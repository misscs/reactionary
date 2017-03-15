import RootContainer from 'routes/Root/RootContainer'
import DashboardContainer from 'routes/Dashboard/DashboardContainer'
import LoginContainer from 'routes/Login/LoginContainer'

// @todo Implement code splitting
const rootRoute = {

  path: '/',
  component: RootContainer,
  indexRoute: {
    component: LoginContainer
  },
  childRoutes: [
    {
      path: 'dashboard',
      component: DashboardContainer
    }
  ]
}

export default rootRoute
