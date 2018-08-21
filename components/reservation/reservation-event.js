const app = require('app')
const agenda = app.getExpress().agenda

console.log('setting default event for reservation')
agenda.on('ready', function () {
  agenda.define(' reservation event definition', (job, done) => {
    // TODO implement tasks here
    console.warn('please implement reservation event or delete this event')
  });

  (async function () { // IIFE to give access to async/await
    await agenda.every('2 minutes', ' reservation event definition')
  })()
})
