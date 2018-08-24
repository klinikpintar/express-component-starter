const MessageQueueService = require('./message-queue-service')

/** helper class for best practice & wrapper implementations */

class MessageQueueHelpers {
  constructor () {
    this.service = new MessageQueueService()
    this.publisherChannel = undefined
  }

  async publishMessage (key, message) {
    let channel = await this.getPublisherChannel()
    await channel.assertQueue(key).catch(e => console.warn(e.message || e))
    channel.sendToQueue(key, Buffer.from(message))
  }

  async consumeMessage (key, callback) {
    let channel = await this.getConsumerChannel().catch(e => console.warn(e.message || e))
    await channel.assertQueue(key).catch(e => console.warn(e.message || e))
    channel.consume(key, callback, {
      noAck: true
    }).catch(e => console.warn(e.message || e))
  }

  async getPublisherChannel () {
    if (this.publisherChannel === undefined) {
      this.publisherChannel = await this.createPublisherChannel().catch(e => console.warn(e.message || e))
    }
    return this.publisherChannel
  }

  /** return promise */
  async createPublisherChannel () {
    if (this.service.publisherConnection.then !== undefined) { // still a promise
      this.service.publisherConnection = await this.service.publisherConnection
    }
    return this.service.createChannel(this.service.publisherConnection).catch(e => console.warn(e.message || e))
  }

  /** return promise */
  async getConsumerChannel () {
    if (this.service.consumerConnection.then !== undefined) { // still a promise
      this.service.consumerConnection = await this.service.consumerConnection
    }
    return this.service.createChannel(this.service.consumerConnection).catch(e => console.warn(e.message || e))
  }

  // TODO : when to close channel & connection?
}

module.exports = MessageQueueHelpers
