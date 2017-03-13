function checkAuthorization (dispatch) {
  // attempt to grab the token from localstorage
  const storedToken = localStorage.getItem('token')

  // if it exists (usernames)
  if (storedToken) {
    const token = JSON.parse(storedToken)
    dispatch(setClient(token))
    return true
  }

  return false
}

export function checkIndexAuthorization ({ dispatch }) {
  // `nextState` - the next "route" we're navigating to in the router
  // `replace` - a helper to change the route
  // `next` - what we call when we're done messing around
  //
  return (nextState, replace, next) => {

    // If we pass the authentication check, go to dashboard
    if (checkAuthorization(dispatch)) {
      replace('dashboard')

      return next()
    }

    // Otherwise let's take them to login!
    replace('login')
    return next()
  }
}
