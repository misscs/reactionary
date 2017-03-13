import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import LoginContainer from '../LoginContainer'
import configureStore from "configureStore"

describe('<LoginContainer />', () =>{
  it(`should render`, () => {
    const store = configureStore()

    const component = renderer.create(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    )

    const tree=component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
