import App from 'components/App'
import DashboardContainer from 'routes/Dashboard/DashboardContainer'
import LoginContainer from 'routes/Login/LoginContainer'

// @todo Implement code splitting

const rootRoute = {

  path: '/',
  component: App,
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
