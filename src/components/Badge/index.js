import React from 'react'
import { connect } from 'react-redux'

import Avatar from 'components/Avatar/Avatar'
import './Badge.css'

const Badge = ({name}) => {
  return (
    <article className="badge">
      <Avatar/>
      <div className="badge-content">{name}</div>
    </article>
  )
}

Badge.propTypes = {
  name: React.PropTypes.string
}

export default Badge
