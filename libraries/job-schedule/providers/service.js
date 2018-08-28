/** mixins for job schedule provider */

class JobScheduleService {
  async init () {
    console.error('please implement provider initialization')
  }
  async start () {
    console.warn('please implement provider starting event')
  }
  async scheduleRecurringJob (key, time, callback) {
    console.warn('please implement schedule recurring method')
  }
  async scheduleSingleJob (key, time, callback) {
    console.warn('please implement schedule single job method')
  }
  async removeJob (key) {
    console.warn('please implement remove job method')
  }
  async stop () {
    console.warn('please implement provider stop event')
  }
}

module.exports = JobScheduleService
