const express = require('express')
const router = express.Router()
const Transformer = require('../../libraries/response')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let transform = new Transformer()
  transform.setResult('user component')
  res.send(transform.data())
})

module.exports = router
