import React from 'react'

function ListItem(props) {
  return (
    <li>
      {props.item}
    </li>
  )
}

ListItem.propTypes = {
  item: React.PropTypes.any,
}

export default ListItem
