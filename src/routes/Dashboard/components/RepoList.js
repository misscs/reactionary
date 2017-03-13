import React, { PropTypes } from 'react'

import List from 'components/List'
import { RepoListItem } from './RepoListItem'

function RepoList({ repos }) {

  if (repos !== false) {
    return <List items={repos} component={RepoListItem} />
  }

  return null
}

RepoList.propTypes = {
  repos: PropTypes.any
}

export default RepoList
