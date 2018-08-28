const JobScheduleService = require('./service')
const Agenda = require('agenda')
const DatabaseManager = require('app/database-manager')

class AgendaService extends JobScheduleService {
  constructor () {
    super()
    let db = new DatabaseManager()
    this.collection = 'agenda_jobs'
    this.connectionString = db.connectionString
    this.agenda = undefined
  }

  async init () {
    this.agenda = new Agenda()
    this.agenda.database(this.connectionString, this.collection, {
      useNewUrlParser: true
    })
    await this.start()
  }

  async start () {
    return this.agenda.start().catch(e => console.warn('agendaJs init error!', e.message || e))
  }

  async scheduleRecurringJob (key, time, callback) {
    this.agenda.on('ready', async () => {
      this.agenda.define(key, callback)
      await this.agenda.every(time, key)
    })
  }

  async scheduleSingleJob (key, time, callback) {
    this.agenda.on('ready', async () => {
      this.agenda.define(key, callback)
      await this.agenda.create(time, key)
    })
  }

  async removeJob (key) {
    this.agenda.on('ready', () => {
      this.agenda.cancel({
        name: key
      }, (err, numRemoved) => {
        console.log(err, numRemoved)
      })
    })
  }

  async stop () {
    this.agenda.on('ready', async () => {
      await this.agenda.stop()
    })
  }
}

module.exports = AgendaService
