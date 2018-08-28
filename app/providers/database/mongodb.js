const MongoClient = require('mongodb').MongoClient
const dbName = process.env.MONGO_DB_NAME
const connectionString = process.env.MONGO_CONNECTION_STRING

module.exports = {
  async connect () {
    let client = await MongoClient.connect(`${connectionString}/${dbName}`, {
      authSource: 'admin'
    }).catch(console.warn)

    if (client) {
      console.log('connected to mongodb')
    }
    return client.db(dbName)
  }
}
