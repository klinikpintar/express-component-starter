// validate response & request
// also store success / error messages

module.exports = {
  request: {
    create (req, res, next) {
      console.warn('implement your request validation here')
      next()
    }
  },
  response: {
    create (req, res, next) {
      console.warn('implement your response validation here')
      next()
    }
  }
}
