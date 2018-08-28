/**
 * Template file for API testing
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const chalk = require('chalk')

describe(chalk.cyanBright.bold('test suite template for doctor'), function () {
  before(async function (done) {
    this.timeout(1000)
    done()
  })

  after(async function (done) {
    this.timeout(1000)
    done()
  })

  describe('define success case for doctor ', function () {
    before(function (done) {
      this.timeout(1000)
      done()
    })
    after(async function (done) {
      this.timeout(1000)
      done()
    })

    it('should return 200 status code')
    it('should return correct object')
  })

  describe('define error case for doctor ', function () {
    before(function (done) {
      this.timeout(1000)
      done()
    })
    after(async function (done) {
      this.timeout(1000)
      done()
    })
    it('should return 400 status code')
    it('should return correct error object')
  })

  describe('define empty case for doctor ', function () {
    before(function (done) {
      this.timeout(1000)
      done()
    })
    after(async function (done) {
      this.timeout(1000)
      done()
    })
    it('should return 404 status code')
    it('should return correct error object')
  })

  describe('define corner cases for doctor ', function () {
    before(function (done) {
      this.timeout(1000)
      done()
    })
    after(async function (done) {
      this.timeout(1000)
      done()
    })
    it('should return 400 status code')
    it('should return correct error object')
  })
})
