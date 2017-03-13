/*
 * API implementation
 */

import apisauce from 'apisauce'

const demoURL = `https://api.github.com`

const create = (baseURL = demoURL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    timeout: 10000
  })

  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  const getUser = (username) => api.get(`users/${username}`)
  const getUserRepos = (username) => api.get(`users/${username}/repos`)

  // Return back a collection of functions. This is our interface.
  return {
    // a list of the API functions from step 2
    getUser,
    getUserRepos
  }
}

export default {
  create
}
