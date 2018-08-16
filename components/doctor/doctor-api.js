const router = require('app').getRouter()
const Controller = require('./doctor-controller')
const Validator = require('./doctor-validator')

/* GET response */
router.get('/', function (req, res, next) {
  res.send(' doctor component')
})
/* POST response */
router.post('/', Validator.request.create, Controller.create, Validator.response.create)

module.exports = router
