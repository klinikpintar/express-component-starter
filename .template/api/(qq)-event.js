const MessageQueueHelpers = require('libraries/message-queue')
const JobScheduleHelpers = require('libraries/job-schedule')

const key = '(qq)-event'
const messageQueue = new MessageQueueHelpers()
const jobSchedule = new JobScheduleHelpers()

messageQueue.publishMessage(key, 'default message queue event for (qq)')

jobSchedule.scheduleRecurringJob('(qq) job-schedule definition', '1 minute', function () {
    console.warn('please implement (qq) job-schedule here', new Date())
})

messageQueue.consumeMessage(key, messageCallback)

function messageCallback(msg) {
    console.log(' [x] Received %s', msg.content.toString())
}
