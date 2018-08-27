const MessageQueueHelpers = require('libraries/message-queue')
const JobScheduleHelpers = require('libraries/job-schedule')

const key = 'patient-event'
const messageQueue = new MessageQueueHelpers()
const jobSchedule = new JobScheduleHelpers()

console.log('sending default event for patient')
messageQueue.publishMessage(key, 'sending default event for patient')

console.log('setting default job-schedule for patient')
jobSchedule.scheduleRecurringJob('patient job-schedule definition', '1 minute', function () {
  console.warn('please implement patient job schedule here', new Date())
})

console.log('consuming default event for patient')
messageQueue.consumeMessage(key, messageCallback)

function messageCallback (msg) {
  console.log(' [x] Received %s', msg.content.toString())
}
