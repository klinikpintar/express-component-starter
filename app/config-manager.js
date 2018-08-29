var fs = require('fs')
var path = require('path')
var _ = require('lodash')

class Config {
  constructor () {
    this.path = path.join(__dirname, 'config')
    this.config = {}
    this.fetchConfig()
  }

  fetchConfig () {
    fs.readdirSync(this.path).forEach(file => {
      let name = this.getFilename(file)
      this.config[name] = require('app/config/' + name)
    })
  }

  getFilename (file) {
    return file.split('.')[0] || null
  }

  get (path, def) {
    return _.get(this.config, path, def)
  }

  set (path, value) {
    return _.set(this.config, path, value)
  }
}

module.exports = Config
