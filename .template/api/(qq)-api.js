/**
 * Template file for API layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const router = require('app').getRouter()
const controller = require('./(qq)-controller')
const validator = require('./(qq)-validator')

/* GET response */
router.get('/', function (req, res, next) {
  res.send('(qq) component')
})
/* POST response */
router.post('/', validator.request.create, controller.create, validator.response.create)

module.exports = router
