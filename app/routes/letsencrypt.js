'use strict'

module.exports = function (app) {
  return {
    validate: function (req, res, next) {
      if (!req.params.id) {
        res.sendStatus(404)
      }

      console.log(req.params.is)
      console.log(req.headers)

      // Expect the email address, password, and token.
      // The email/password is used with certbot to
      // make the validation response. The token is used
      // to autheorize a POST back to the originating server.
      // Also need the domain to verify, which will be used for
      // the CORS handler.

      // Find the validation value on disk and return it.
      res.sendStatus(501)
    }
  }
}
