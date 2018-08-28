const MessageQueueService = require('./service')
const Amqp = require('amqplib')

class RabbitMQService extends MessageQueueService {
  constructor () {
    super()
    this.consumerConnection = undefined
    this.publisherConnection = undefined
    this.init() // async process
  }
  async init () {
    this.consumerConnection = this.createConnection()
    this.publisherConnection = this.createConnection()
  }
  async createConnection () {
    return Amqp.connect(process.env.AMQP_URL).catch(e => console.warn('rabbitMQ init error!', e.message || e))
  }
  async createChannel (conn) {
    return conn.createChannel()
  }
  async assertToQueue (channel, key) {
    return channel.assertQueue(key)
  }
  async sendToQueue (channel, key, payload) {
    channel.sendToQueue(key, payload)
  }
  async consumeQueue (channel, key, callback) {
    channel.consume(key, callback, {
      noAck: true
    }).catch(e => console.warn(e.message || e))
  }
}

module.exports = RabbitMQService
