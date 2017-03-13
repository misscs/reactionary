import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Header from 'components/Header'

describe('<Header />', () =>{

  it(`should only render the logo when logged out`, () => {
    const component = renderer.create(
      <Header
        loggedIn={false}
       />
    )

    const tree=component.toJSON()
    expect(tree).toMatchSnapshot()
  })


  it(`should render <Badge /> when logged in`, () => {
    const component = renderer.create(
      <Header
        loggedIn={true}
       />
    )

    const tree=component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
