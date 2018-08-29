require('dotenv').config()
require('app-module-path').addPath(process.env.PWD)
require('app').run()

const Mocha = require('mocha')
const fs = require('fs')
const path = require('path')
const mocha = new Mocha()

fs.readdirSync(path.join(process.env.PWD, 'tests', 'api')).forEach(dir => {
  mocha.addFile(path.join(process.env.PWD, 'tests', 'api', dir))
})

// Run the tests.
mocha.run(function (failures) {
  process.exitCode = failures ? -1 : 0 // exit with non-zero status if there were failures
  process.exit(process.exitCode)
})
