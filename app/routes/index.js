'use strict'

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendStatus(501)
  })
}