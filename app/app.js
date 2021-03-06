const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const api = require('../api')
const favicon = require('serve-favicon')
/* Webpack */
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)
app.use(require('webpack-dev-middleware')(compiler))
app.use(require('webpack-hot-middleware')(compiler))

// view engine setup
// app.set('views', path.join(__dirname, '../views'))
// app.set('view engine', 'jade')

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

// app.use('/', routes)
// app.use('/users', users)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Socket middleware
api.bootstrap(io)

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})

module.exports = app
