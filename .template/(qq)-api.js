const router = require('app').getRouter()
const Controller = require('./(qq)-controller')
const Validator = require('./(qq)-validator')

/* GET response */
router.get('/', function (req, res, next) {
  res.send(' (qq) component')
})
/* POST response */
router.post('/', Validator.request.create, Controller.create, Validator.response.create)

module.exports = router
