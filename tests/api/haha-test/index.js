const chalk = require('chalk')

describe(chalk.cyanBright.bold('Test Suite Template for haha-test'), function () {
    before(async function (done) {
        this.timeout(1000)
        done()
    })

    after(async function (done) {
        this.timeout(1000)
        done()
    })

    describe('define success case for haha-test ', function () {
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

    describe('define error case for haha-test ', function () {
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

    describe('define empty case for haha-test ', function () {
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

    describe('define corner cases for haha-test ', function () {
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
