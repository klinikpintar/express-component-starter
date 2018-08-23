module.exports = {
  server: {
    test: {
      host: ['localhost:27017'],
      config: {
        authSource: 'admin'
      }
    },
    local: {
      host: ['localhost:27017'],
      config: {
        authSource: 'admin'
      }
    },
    development: {
      host: ['localhost:27017'],
      config: {
        authSource: 'admin'
      }
    },
    staging: {
      host: ['localhost:27017'],
      config: {
        authSource: 'admin'
      }
    },
    production: {
      host: ['localhost:27017'],
      config: {
        authSource: 'admin'
      }
    }
  },
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}
