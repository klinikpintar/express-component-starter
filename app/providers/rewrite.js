var rewrite = require('express-urlrewrite')

class Rewrite {
  constructor (express) {
    this.express = express
  }

  register () {
    this.express.use(rewrite(/^\/process.env.API_PREFIX\/(.*)/, '/$1'))
  }
}

module.exports = Rewrite
