const Sequelize = require('sequelize')
const dbName = process.env.DB_NAME
const connectionString = process.env.DB_CONNECTION_STRING

module.exports = {
  async connect () {
    let sequelize = new Sequelize(`${connectionString}/${dbName}`)
    if (await sequelize.authenticate().catch(console.error)) {
      console.log(`connected to ${dbName}`)
    }
    return sequelize
  }
}
