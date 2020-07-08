/**
 * Template file for API layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const router = require('app').getRouter()
const userController = require('./user-controller')
const validator = require('./user-validator')

/* GET response */
router.get('/', userController.findAll)
/* POST response */
router.post('/', validator.request.create, userController.create, validator.response.create)

module.exports = router
