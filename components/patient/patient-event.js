const app = require('app')
const agenda = app.getExpress().agenda

console.log('setting default event for patient')
agenda.define(' patient event definition', (job, done) => {
  // TODO implement tasks here
  console.warn('please implement patient event or delete this event')
});

(async function () { // IIFE to give access to async/await
  await agenda.every('2 minutes', ' patient event definition')
})()
