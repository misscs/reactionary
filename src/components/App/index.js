import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from 'components/Header'

import {
  getLoggedIn,
  getIsFetching,
  getUsername
} from 'routes/Login/LoginSelectors'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          loggedIn={this.props.loggedIn}
          isFetching={this.props.isFetching}
          name={this.props.name}
        />
        <main id="container">
          {this.props.children}
        </main>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node,
}

const mapStateToProps = createStructuredSelector({
  loggedIn: getLoggedIn(),
  isFetching: getIsFetching(),
  name: getUsername()
})

export default connect(mapStateToProps)(App)
