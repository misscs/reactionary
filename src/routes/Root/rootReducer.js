import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { loginReducer } from "routes/Login/LoginRedux"
import { dashboardReducer } from "routes/Dashboard/DashboardRedux"

const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
  routing: routerReducer
})

export default rootReducer
