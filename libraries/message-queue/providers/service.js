/** mixis for message queue providers */

class MessageQueueService {
  async init () {
    console.error('please implement provider initialization')
  }
  async createConnection () {
    console.warn('please implement create connection method')
  }
  async createChannel (conn) {
    console.warn('please implement create channel method')
  }
  async assertToQueue (channel, key) {
    console.warn('please implement assert to queue method')
  }
  async sendToQueue (channel, key, payload) {
    console.warn('please implement send to queue method')
  }
  async consumeQueue (channel, key, callback) {
    console.warn('please implement consume queue method')
  }
}

module.exports = MessageQueueService
