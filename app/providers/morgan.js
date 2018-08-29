var morgan = require('morgan')

class Morgan {
  constructor (express) {
    this.express = express
    this.mode = process.env.NODE_ENV === 'development' ? 'dev' : 'combined'
  }

  register () {
    this.express.use(morgan(this.mode))
  }
}

module.exports = Morgan
