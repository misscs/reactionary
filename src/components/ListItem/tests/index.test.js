import React from 'react'
import renderer from 'react-test-renderer'

import ListItem from 'components/ListItem'

describe('<ListItem />', () => {
  it('should render the content passed to it', () => {
    const content = (<div>Hello world!</div>)
    const component = renderer.create(
      <ListItem item={content} />
    )

    const tree=component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
