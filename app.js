const ENV = process.env.NODE_ENV
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const userComponent = require('./components/user')
const authComponent = require('./components/auth')

var app = express()

app.use(logger(ENV === 'development' ? 'dev' : 'combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// start route handling
app.use('/api/auth', authComponent)
app.use('/api/user', userComponent)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json('error')
})

module.exports = app
