const MessageQueueService = require('./message-queue-service')

/** helper class for best practice & wrapper implementations */

class MessageQueueHelpers {
  constructor () {
    this.service = new MessageQueueService()
  }

  async publishMessage (key, message) {
    let channel = await this.getPublisherChannel()
    await channel.assertQueue(key).catch(e => console.warn(e.message || e))
    await channel.sendToQueue(key, Buffer.from(message)).catch(e => console.warn(e.message || e))
    console.log(message, 'sent to queue')
  }

  async consumeMessage (key) {
    let channel = await this.getConsumerChannel().catch(e => console.warn(e.message || e))
    await channel.assertQueue(key).catch(e => console.warn(e.message || e))
    let message = await channel.consume(key).catch(e => console.warn(e.message || e))
    if (message !== null) {
      console.log(message.content.toString())
      channel.ack(message)
    }
    return message
  }

  async getPublisherChannel () {
    if (this.publisherChannel === undefined) {
      this.publisherChannel = await this.createPublisherChannel().catch(e => console.warn(e.message || e))
    }
    return this.publisherChannel
  }

  /** return promise */
  async screatePublisherChannel () {
    let channel
    if (this.service.publisherConnection.then !== undefined) { // still a promise
      await this.service.publisherConnection
    }
    channel = this.service.createChannel(this.service.publisherConnection).catch(e => console.warn(e.message || e))
    return channel
  }

  /** return promise */
  async getConsumerChannel () {
    if (this.service.consumerConnection.then !== undefined) { // still a promise
      await this.service.consumerConnection
    }
    return this.service.createChannel(this.service.consumerConnection).catch(e => console.warn(e.message || e))
  }

  // TODO : when to close channel & connection?
}

module.exports = MessageQueueHelpers
