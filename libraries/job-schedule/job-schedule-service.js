const agenda = require('./providers/agenda')

/** service class to make library usage easier */

class JobScheduleService {
  constructor () {
    this.agenda = agenda
  }
}

module.exports = JobScheduleService
