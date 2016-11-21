import $ from 'jquery'
import api from './api'

const socket = api.socket
console.log(1)
$('form').submit(function () {
  socket.emit('chat message', $('#m').val())
  $('#m').val('')
  return false
})
socket.on('chat message', function (msg) {
  $('#messages').append($('<li>').text(msg))
  scrollBottomOfChat()
})

function scrollBottomOfChat () {
  var element = document.getElementById('messages')
  element.scrollTop = element.scrollHeight
}
