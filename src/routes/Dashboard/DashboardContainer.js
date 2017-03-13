import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import List from 'components/List'
import { RepoListItem } from './components/RepoListItem'

import { setToken } from 'routes/Login/LoginRedux'
import { getRepos } from './DashboardSelectors'

export class DashboardContainer extends React.PureComponent {

  componentDidMount() {
    const token = localStorage.token

    if (token) {
      this.props.dispatch(setToken(token))
    }
  }

  render() {
    const { repos } = this.props

    return (
      <section>
        <h1>Dashboard</h1>
        <List items={repos} component={RepoListItem} />
      </section>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  repos: getRepos()
})

export default connect(mapStateToProps)(DashboardContainer)
