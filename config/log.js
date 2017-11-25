/**
 * Logging Configuration
 * (app.config.log)
 *
 * @see {@link http://trailsjs.io/doc/config/log}
 */
 const winston = require('winston')

module.exports = {
  logger: new winston.Logger({
    level: 'debug',
    exitOnError: false,
    transports: [
      new (winston.transports.Console)({
        prettyPrint: true,
        colorize: true
      })
    ]
  })
}
