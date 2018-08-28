/**
 * Template file for Event layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const MessageQueueHelpers = require('libraries/message-queue')
const JobScheduleHelpers = require('libraries/job-schedule')

const key = 'reservation-event'
const messageQueue = new MessageQueueHelpers()
const jobSchedule = new JobScheduleHelpers()

messageQueue.publishMessage(key, 'default message queue event for reservation')

jobSchedule.scheduleRecurringJob('reservation job-schedule definition', '1 minute', function () {
  console.warn('please implement reservation job-schedule here', new Date())
})

messageQueue.consumeMessage(key, messageCallback)

function messageCallback (msg) {
  console.log(' [x] Received %s', msg.content.toString())
}
