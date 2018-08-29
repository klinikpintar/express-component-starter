var bp = require('body-parser')

class BodyParser {
  constructor (express) {
    this.express = express
  }

  register () {
    this.express.use(`/${process.env.API_PREFIX}/*`, bp.json())
    this.express.use(`/${process.env.API_PREFIX}/*`, bp.urlencoded({
      extended: false
    }))
  }
}

module.exports = BodyParser
