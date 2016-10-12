var io = require('socket.io-client')
var socket = io('http://localhost:3000')

module.exports = {
  socket: socket
}
