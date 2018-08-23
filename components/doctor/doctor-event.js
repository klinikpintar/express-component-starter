const app = require('app')
const agenda = app.getExpress().agenda
const MessageQueueHelpers = require('libraries/message-queue')

const key = 'doctor-event'
const messageQueue = new MessageQueueHelpers()

console.log('sending default event for doctor')
messageQueue.publishMessage(key, 'sending default event for doctor')

console.log('setting default job-schedule for doctor')
agenda.on('ready', function () {
  agenda.define(' doctor job-schedule definition', (job, done) => {
    // TODO implement tasks here
    console.warn('please implement doctor job-schedule or delete this job-schedule')
  });

  (async function () { // IIFE to give access to async/await
    await agenda.every('2 minutes', ' doctor job-schedule definition')
  })()
})

console.log('consuming default event for doctor')
console.log(messageQueue.consumeMessage(key))
