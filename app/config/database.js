// TODO implement your db configuration

module.exports = {
  server: {
    test: {
      host: [],
      config: {}
    },
    local: {
      host: [],
      config: {}
    },
    development: {
      host: [],
      config: {}
    },
    staging: {
      host: [],
      config: {}
    },
    production: {
      host: [],
      config: {}
    }
  },
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}
