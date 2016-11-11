'use strict'

require('ngn')
require('ngnx-http')

const server = new NGNX.http.Server({
  poweredby: 'Author.io',
  cors: false,
  port: 80
})

server.createRoutes('./routes/index')

server.on('ready', function () {
  console.log('Server is running.')
})
