const MessageQueueHelpers = require('libraries/message-queue')
const JobScheduleHelpers = require('libraries/job-schedule')

const key = 'doctor-event'
const messageQueue = new MessageQueueHelpers()
const jobSchedule = new JobScheduleHelpers()

console.log('sending default event for doctor')
messageQueue.publishMessage(key, 'sending default event for doctor')

console.log('setting default job-schedule for doctor')
jobSchedule.scheduleRecurringJob('doctor job-schedule definition', '1 minute', function () {
  console.warn('please implement doctor job schedule here', new Date())
})

console.log('consuming default event for doctor')
messageQueue.consumeMessage(key, messageCallback)

function messageCallback (msg) {
  console.log(' [x] Received %s', msg.content.toString())
}
