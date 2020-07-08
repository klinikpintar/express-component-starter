/**
 * Template file for Repository layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */
const app = require('app')

class UserRepository {
    constructor() {
        this.db = app.getDatabase()
        this.collection = this.db.collection('users')
    }

    async findAll() {
        const res = await this.collection.find({}).toArray()
        return res
    }

    async create(user) {
        console.log(user)
        const res = await this.collection.insertMany([user])
        return res
    }

    async delete(criteria) {
    }
}

module.exports = UserRepository
