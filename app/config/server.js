module.exports = {
  env: process.env.NODE_ENV || 'development',
  protocol: 'http', // http or https
  host: '0.0.0.0',
  port: process.env.PORT || 9099,

  // TODO update this for https
  certificates: {
    // key: fs.readFileSync('/home/denma/.ssl/certs/localhost.key'),
    // cet: fs.readFileSync('/home/denma/.ssl/certs/localhost.crt')
  }
}
