/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react'
import { connect } from 'react-redux'

import ListItem from 'components/ListItem'
import './RepoList.css'

export class RepoListItem extends React.PureComponent {

  render() {
    const item = this.props.item

    const content = (
      <article className="repo-list-item">
        <h3>
          {item.name}
        </h3>
        <p>{item.description}</p>
      </article>
    )

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
    )
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.object,
}

export default connect()(RepoListItem)
