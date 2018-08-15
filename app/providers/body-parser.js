var bp = require('body-parser')

class BodyParser {
  constructor (express) {
    this.express = express
  }

  register () {
    this.express.use('/api/*', bp.json())
    this.express.use('/api/*', bp.urlencoded({extended: false}))
  }
}

module.exports = BodyParser
