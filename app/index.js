require('newrelic')
const http = require('http')
const https = require('https')
const express = require('express')
const ConfigManager = require('app/config-manager')
const ComponentManager = require('app/component-manager')

class Application {
  constructor () {
    let config = new ConfigManager()
    this.express = express()
    this.serverConfig = config.get('server')
    this.dbConfig = config.get('database')
    this.serviceProviders = config.get('service-provider')
  }

  setUpServer () {
    this.createServer(this.serverConfig.protocol === 'https')
  }

  async setUpDatabase () {
    let db = this.dbConfig
    this.express.db = await db.connect().catch(console.warn)
  }

  registerServiceProviders () {
    this.serviceProviders.forEach(ServiceProvider => {
      try {
        let instance = new ServiceProvider(this.express, this.server, this.serverConfig)

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
        let instance = new ServiceProvider(this.express, this.server, this.serverConfig)

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
      this.server = https.createServer(this.serverConfig.certificates, this.express)
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

  run () {
    this.setUpDatabase()
    this.setUpServer()

    this.server.listen(this.serverConfig.port)

    console.log('server listening on port :' + this.serverConfig.port)
  }
}

module.exports = new Application()
