'use strict'
const SECRET = process.env.TOKEN_SECRET || 'Token'

module.exports = {
  /**
  * Secret use by express for his session
  */
  secret: SECRET,

  /**
  * Store use by express for saving his session
  */
  store: null,

  /**
  * Extras options pass to express session middleware
  */
  options: {}
}
