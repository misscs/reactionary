import React, { PropTypes } from 'react'

import Badge from 'components/Badge'
import HeaderItem from './Item'
import './Header.css'

class Header extends React.PureComponent  {

  render () {

    const userActions = this.props.loggedIn ? (
        <HeaderItem>
          <Badge name={this.props.name} />
        </HeaderItem>
      ) : (
        <HeaderItem>
          Register
        </HeaderItem>

      )

    return (
      <header>
        <HeaderItem className="logo">
          <span>CC</span>
        </HeaderItem>

        { userActions }
      </header>
    )
  }
}


Header.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool,
  userActions: React.PropTypes.node,
}


export default Header
