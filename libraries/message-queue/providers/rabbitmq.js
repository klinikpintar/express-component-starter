const Amqp = require('amqplib/callback_api')

class RabbitMQ {
  async connect () {
    let amqp = await Amqp.connect(process.env.AMQP_URL).catch(e => console.warn('amqp create connection error!', e.message || e))
    return amqp
  }

  async createChannel () {
    let channel = await this.connect().createChannel().catch(e => console.warn('amqp create channel error!', e.message || e))
    return channel
  }
}

module.exports = RabbitMQ
