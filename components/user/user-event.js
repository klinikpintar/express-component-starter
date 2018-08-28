/**
 * Template file for Event layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const MessageQueueHelpers = require('libraries/message-queue')
const JobScheduleHelpers = require('libraries/job-schedule')

const key = 'user-event'
const messageQueue = new MessageQueueHelpers()
const jobSchedule = new JobScheduleHelpers()

messageQueue.publishMessage(key, 'default message queue event for user')

jobSchedule.scheduleRecurringJob('user job-schedule definition', '1 minute', function () {
  console.warn('please implement user job-schedule here', new Date())
})

messageQueue.consumeMessage(key, messageCallback)

function messageCallback (msg) {
  console.log(' [x] Received %s', msg.content.toString())
}
