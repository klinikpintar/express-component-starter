var cors = require('cors')

class Cors {
  constructor (express) {
    this.express = express
  }

  register () {
    this.express.use(cors())
  }
}

module.exports = Cors
