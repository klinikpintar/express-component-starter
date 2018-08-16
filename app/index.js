require('newrelic')
const http = require('http')
const https = require('https')
const express = require('express')
const ConfigManager = require('app/config-manager')
const DatabaseManager = require('app/database-manager')
const ComponentManager = require('app/component-manager')

class Application {
  constructor () {
    let config = new ConfigManager()
    this.express = express()
    this.config = config.get('server')
    this.serviceProviders = config.get('service-provider')
  }

  setUpServer () {
    this.createServer(this.config.protocol === 'https')
  }

  setUpDatabase () {
    let db = new DatabaseManager()
    db.connect()
  }

  registerServiceProviders () {
    this.serviceProviders.forEach(ServiceProvider => {
      try {
        let instance = new ServiceProvider(this.express, this.server, this.config)

        if (typeof instance.register === 'function') {
          instance.register()
        }
      } catch (err) {
        console.error(err)
      }
    })
  }

  installServiceProviders () {
    this.serviceProviders.forEach(ServiceProvider => {
      try {
        let instance = new ServiceProvider(this.express, this.server, this.config)

        if (typeof instance.install === 'function') {
          instance.install()
        }
      } catch (err) {
        console.error(err)
      }
    })
  }

  createServer (secure) {
    if (secure === true) {
      this.server = https.createServer(this.config.certificates, this.express)
    } else {
      this.server = http.createServer(this.express)
    }

    // register service provider
    this.registerServiceProviders()

    // register components
    new ComponentManager(this.express).registerComponents()

    // install service provider
    this.installServiceProviders()

    return this.server
  }

  getExpress () {
    return this.express
  }

  getServer () {
    return this.server
  }

  getRouter () {
    return express.Router()
  }

  async run () {
    await this.setUpDatabase()

    await this.setUpServer()

    this.server.listen(this.config.port)

    console.log('server listening on port :' + this.config.port)
  }
}

module.exports = new Application()
