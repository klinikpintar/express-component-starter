/**
 * Template file for API layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const router = require('app').getRouter()
const Controller = require('./reservation-controller')
const Validator = require('./reservation-validator')

/* GET response */
router.get('/', function (req, res, next) {
  res.send(' reservation component')
})
/* POST response */
router.post('/', Validator.request.create, Controller.create, Validator.response.create)

module.exports = router
