module.exports = {
  server: {
    test: {
      host: ['mongodb:27017'],
      config: {
        authSource: 'admin'
      }
    },
    local: {
      host: ['mongodb:27017'],
      config: {
        authSource: 'admin'
      }
    },
    development: {
      host: ['mongodb:27017'],
      config: {
        authSource: 'admin'
      }
    },
    staging: {
      host: ['mongodb:27017'],
      config: {
        authSource: 'admin'
      }
    },
    production: {
      host: ['mongodb:27017'],
      config: {
        authSource: 'admin'
      }
    }
  },
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}
