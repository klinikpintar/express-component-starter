const MessageQueueHelpers = require('libraries/message-queue')
const JobScheduleHelpers = require('libraries/job-schedule')

const key = 'reservation-event'
const messageQueue = new MessageQueueHelpers()
const jobSchedule = new JobScheduleHelpers()

console.log('sending default event for reservation')
messageQueue.publishMessage(key, 'sending default event for reservation')

console.log('setting default job-schedule for reservation')
jobSchedule.scheduleRecurringJob('reservation job-schedule definition', '1 minute', function () {
  console.warn('please implement reservation job schedule here', new Date())
})

console.log('consuming default event for reservation')
messageQueue.consumeMessage(key, messageCallback)

function messageCallback (msg) {
  console.log(' [x] Received %s', msg.content.toString())
}
