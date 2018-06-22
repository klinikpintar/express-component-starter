var user = process.env.DB_USER
var password = process.env.DB_PASSWORD
var database = process.env.DB_NAME

var servers = {
  test: [],
  staging: [
    'medigodev-shard-00-00-vc1cv.mongodb.net:27017',
    'medigodev-shard-00-01-vc1cv.mongodb.net:27017',
    'medigodev-shard-00-02-vc1cv.mongodb.net:27017'
  ],
  development: [
    'medigodev-shard-00-00-vc1cv.mongodb.net:27017',
    'medigodev-shard-00-01-vc1cv.mongodb.net:27017',
    'medigodev-shard-00-02-vc1cv.mongodb.net:27017'
  ],
  production: [
    'medigo0-shard-00-00-k6agf.mongodb.net:27017',
    'medigo0-shard-00-01-k6agf.mongodb.net:27017',
    'medigo0-shard-00-02-k6agf.mongodb.net:27017'
  ]
}

var server = servers[process.env.NODE_ENV]

if (!server) {
  console.log('No servers found for env ' + process.env.NODE_ENV)
  process.exit(1)
}

var config = {
  ssl: 'true',
  replicaSet: 'MedigoDev-shard-0',
  authSource: 'admin'
}

var connection = `mongodb://${user}:${password}`
connection += '@' + server.join(',')
connection += '/' + database
connection += '?' + Object.keys(config).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(config[k])}`).join('&')

module.exports = connection
