/**
 * Template file for Controller layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const Repository = require('./doctor-repository')
const transformer = require('./doctor-transformer')

class DoctorController {
  async create (req, res, next) {
    try {
      let repo = new Repository()
      let data = await repo.create(req.query)
      return res.json({
        data: transformer.create(data)
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: `Unknown Error Occured : ${error.message || error}`
      })
    }
  }
}

module.exports = new DoctorController()
