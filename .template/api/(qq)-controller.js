/**
 * Template file for Controller layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const Repository = require('./(qq)-repository')
const transformer = require('./(qq)-transformer')

module.exports = {
  async create(req, res, next) {
      try {
          let repo = new Repository()
          let data = await repo.create(req.body)
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