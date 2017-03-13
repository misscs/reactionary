/*
 * Login Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { connect } from 'react-redux'

import {
  changeUsername,
  loginRequest
} from 'routes/Login/LoginRedux'

import LoginForm from './LoginForm'
import Input from 'components/Input'

let createHandlers = function(dispatch) {
  let handleClick = function(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    dispatch(loginRequest())
  }

  let onChangeUsername = function(evt) {
    dispatch(changeUsername(evt.target.value))
  }

  return {
    handleClick,
    onChangeUsername
  }
}


class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handlers = createHandlers(this.props.dispatch)
  }

  render() {
    return (
      <section>
        <LoginForm>
          <legend>Browse Github User Repos</legend>
          <label htmlFor="username">
            Username
          </label>
          <Input
            id="username"
            type="text"
            placeholder="Github username"
            value={this.props.username}
            onChange={this.handlers.onChangeUsername}
          />
        <button onClick={this.handlers.handleClick}>Octomagic</button>
        </LoginForm>
      </section>
    )
  }
}

export default connect()(LoginContainer)
