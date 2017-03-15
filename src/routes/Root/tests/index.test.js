import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import RootContainer from 'routes/Root/RootContainer'
import configureStore from 'configureStore'

describe('<RootContainer />', () => {
  let store
  beforeEach(() => {
    store = configureStore()
  })

  it(`should render`, () => {
    const component = renderer.create(
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`should render its children`, () => {
    const children = (<h1>Test</h1>)
    const component = shallow(
      <Provider store={store}>
        <RootContainer>
          {children}
        </RootContainer>
      </Provider>
    )
    expect(component.contains(children)).toBe(true)
  })
})
