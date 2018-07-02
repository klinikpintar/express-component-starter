const express = require('express')
const router = express.Router()
const Transformer = require('../../libraries/response')

/* GET response */
router.get('/', function (req, res, next) {
  let transform = new Transformer()
  transform.setResult(' (qq) component')
  res.send(transform.data())
})

module.exports = router
