const amqp = require('amqplib')

/** service class to make library usage easier */

class MessageQueueService {
  constructor () {
    this.consumerConnection = this.createConnection()
    this.publisherConnection = this.createConnection()
  }

  async createConnection () {
    return amqp.connect(process.env.AMQP_URL)
  }

  createChannel (conn) {
    return conn.createChannel()
  }

  assertToQueue () {

  }

  sendToQueue () {

  }

  consumeQueue () {

  }
}

module.exports = MessageQueueService
