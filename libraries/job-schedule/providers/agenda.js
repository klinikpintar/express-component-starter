const Agenda = require('agenda')
const DatabaseManager = require('app/database-manager')

class AgendaClient {
  constructor (express) {
    this.collection = 'agenda_jobs'
    this.express = express
  }

  async register () {
    let db = new DatabaseManager()
    let agenda = new Agenda()
    agenda.database(db.connectionString, this.collection, {
      useNewUrlParser: true
    })

    this.run().catch(e => console.warn('agenda error!', e.message || e))
  }

  async run () {
    await this.express.agenda.start()
  }
}

module.exports = AgendaClient
