/**
 * Template file for Controller layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

const Repository = require('./user-repository')
const transformer =  require('./user-transformer')

module.exports = {
    
    async findAll(req, res, next) {
        const repo = new Repository()
        let data = await repo.findAll()
        return res.json(data)
    },

    async create(req, res, next) {
        const repo = new Repository()
        try {
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
