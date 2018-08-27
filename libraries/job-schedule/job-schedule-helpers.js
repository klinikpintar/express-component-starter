const JobScheduleService = require('./providers/agenda')

/** helper class for best practice & wrapper implementations */

class ScheduleHelpers {
  constructor () {
    this.service = new JobScheduleService()
    this.service.init() // async proses
  }

  scheduleRecurringJob (key, time, callback) {
    this.service.scheduleRecurringJob(key, time, callback).catch(console.warn)
  }

  scheduleSingleJob (key, time, callback) {
    this.service.scheduleSingleJob(key, time, callback).catch(console.warn)
  }

  removeJob (key) {
    this.service.removeJob(key)
  }

  runSchedule () {

  }

  runAllSchedule () {

  }

  stopSchedule () {
    this.service.stop()
  }
}

module.exports = ScheduleHelpers
