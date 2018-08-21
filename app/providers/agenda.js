var Agenda = require('agenda')
var DatabaseManager = require('app/database-manager')

class AgendaClient {
  constructor (express) {
    this.collection = 'agenda_jobs'
    this.express = express
  }

  async register () {
    let db = new DatabaseManager()

    this.express['agenda'] = new Agenda({
      db: {
        address: db.connectionString,
        collection: this.collection
      }
    })

    this.run().catch(e => console.warn('agenda error!', e.message || e))
  }

  async run () {
    await this.express.agenda.start()
  }
}

module.exports = AgendaClient
