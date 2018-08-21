const Config = require('app/config-manager')
const mongoose = require('mongoose')

class Database {
  constructor () {
    let config = new Config()
    this.config = config.get('database')
    this.configServer = config.get('server')
    this.connectionString = this.createConnectionString()
  }

  createConnectionString () {
    let server = this.getServers()
    let serverConfig = server.config
    var connection = `mongodb://${this.config.username}:${this.config.password}`
    connection += '@' + server.host.join(',')
    connection += '/' + this.config.database
    connection += '?' + Object.keys(serverConfig).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(serverConfig[k])}`).join('&')
    return connection
  }

  getServers () {
    let env = this.configServer.env
    let server = this.config.server[env]

    if (!server) {
      console.log('No server found for env ' + env)
      process.exit(1)
    }

    return server
  }

  connect () {
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
      console.log('success connect to mongodb')
    })

    return mongoose.connect(this.connectionString, this.getConnectionOptions())
  }

  getConnectionOptions () {
    return {
      useNewUrlParser: true
    }
  }
}

module.exports = Database
