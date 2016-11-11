'use strict'

module.exports = function (app) {
  const LE = require('./letsencrypt')(app)

  // Custom API
  app.get('/', function (req, res) {
    req.params.id = 'test'
    LE.validate.apply(this, arguments)
  })

  // Proxy Responder
  app.get('/.well-known/acme-challenge/:id', LE.validate)
}
