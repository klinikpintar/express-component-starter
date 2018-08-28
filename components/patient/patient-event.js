/**
 * Template file for Event layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const MessageQueueHelpers = require('libraries/message-queue')
const JobScheduleHelpers = require('libraries/job-schedule')

const key = 'patient-event'
const messageQueue = new MessageQueueHelpers()
const jobSchedule = new JobScheduleHelpers()

messageQueue.publishMessage(key, 'default message queue event for patient')

jobSchedule.scheduleRecurringJob('patient job-schedule definition', '1 minute', function () {
  console.warn('please implement patient job-schedule here', new Date())
})

messageQueue.consumeMessage(key, messageCallback)

function messageCallback (msg) {
  console.log(' [x] Received %s', msg.content.toString())
}
