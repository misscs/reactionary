import React from 'react'
import renderer from 'react-test-renderer'

import RepoList from 'routes/Dashboard/components/RepoList'
import { RepoListItem } from 'routes/Dashboard/components/RepoListItem'

describe('Dashboard comonents: <RepoList /> & <RepoListItem />', () => {
  let item
  let items

  beforeEach(() => {
    item = {
      name: 'posthtml-postcss-modules',
      description: 'PostCSS CSS Modules Plugin',
      full_name: 'emilos/posthtml-postcss-modulese'
    }

    items = [
      {
        name: 'posthtml-postcss-modules',
        description: 'PostCSS CSS Modules Plugin',
        full_name: 'emilos/posthtml-postcss-modulese'
      },
      {
        name: 'posthtml-postcss-modules',
        description: 'PostCSS CSS Modules Plugin',
        full_name: 'emilos/posthtml-postcss-modulese'
      }
    ]
  })

  describe('<RepoList />', () => {
    it('should render a list of repositories', () => {
      const component = renderer.create(
        <RepoList repos={items} />
      )

      const tree=component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should not render when nothing is passed', () => {
      const component = renderer.create(
        <RepoList repos={false} />
      )

      const tree=component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('<RepoListItem />', () => {
    it('should render one repository list item', () => {
      const component = renderer.create(
        <RepoListItem item={item} />
      )

      const tree=component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
