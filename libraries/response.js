// a wrapper class for response object
// TODO: WORK IN PROGRESS
const util = require('util')

class ResponseTransformer {
  constructor (errors = [], hasErrors = false) {
    this.errors = errors
    this.hasErrors = hasErrors
  }

  // single error, cancel all running process
  cancel (msg, status) {
    let err
    if (util.types.isNativeError(msg)) {
      err = msg
    } else if (!status && msg && msg.message && (msg.status || msg.statusCode)) {
      // allow chaining this from another response
      err = {
        message: msg.message,
        statusCode: msg.status || msg.statusCode
      }
    } else {
      err = {
        message: msg,
        statusCode: status
      }
    }
    return err
  }

  // multiple errors
  error (key, val) {
    this.errors[key] = val || true
    this.hasErrors = true
  }

  // set data to return
  setResult (val) {
    let res
    if (typeof val === 'string' || typeof val === 'object') {
      res = val
    } else {
      res = '' + val
    }
    this.finish(res, 200)
  }

  // finish process
  finish (message = '', statusCode = 400) {
    this.result = {
      message: message,
      statusCode: statusCode
    }
  }

  data () {
    if (!this.result) { console.error('must call finish') }

    return this.result
  }
}

module.exports = ResponseTransformer
