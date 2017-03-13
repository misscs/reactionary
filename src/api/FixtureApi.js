/**
 * Fixture API
 * Functions return fixtures
 */

export default {
  getError: () => {
    return {
      ok: false,
      data: require('../tests/fixtures/error.json')
    }
  },
  getUser: () => {
    return {
      ok: true,
      data: require('../tests/fixtures/user.json')
    }
  },
  getUserRepos: () => {
    return {
      ok: true,
      data: require('../tests/fixtures/repos.json')
    }
  }
}
