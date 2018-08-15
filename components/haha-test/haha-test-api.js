const router = require('app').getRouter()
const Controller = require('./haha-test-controller')
const Validator = require('./haha-test-validator')

/* GET response */
router.get('/', function (req, res, next) {
  res.send(' haha-test component')
})
/* POST response */
router.post('/', Validator.request.create, Controller.create, Validator.response.create)

module.exports = router
