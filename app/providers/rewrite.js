var rewrite = require('express-urlrewrite')

class Rewrite {
  constructor (express) {
    this.express = express
  }

  register () {
    this.express.use(rewrite(/^\/api\/(.*)/, '/$1'))
  }
}

module.exports = Rewrite
