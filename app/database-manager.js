var Config = require('app/config')

class Database {
  constructor () {
    let config = new Config()
    this.config = config.get('database')
    this.configServer = config.get('server')
    this.connectionString = this.createConnectionString()
  }

  createConnectionString () {
    // todo implement connection string
    let connection
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
    console.warn('please implement database connection')
  }

  getConnectionOptions () {
    // todo add extra options if necessary
  }
}

module.exports = Database
