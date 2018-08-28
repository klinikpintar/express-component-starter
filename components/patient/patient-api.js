/**
 * Template file for API layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const router = require('app').getRouter()
const Controller = require('./patient-controller')
const Validator = require('./patient-validator')

/* GET response */
router.get('/', function (req, res, next) {
  res.send(' patient component')
})
/* POST response */
router.post('/', Validator.request.create, Controller.create, Validator.response.create)

module.exports = router
