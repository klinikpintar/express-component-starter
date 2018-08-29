let db

if (process.env.DB_DRIVER === 'mongo') {
  db = require('../providers/database/mongodb')
} else {
  db = require('../providers/database/sequelize')
}

module.exports = db
