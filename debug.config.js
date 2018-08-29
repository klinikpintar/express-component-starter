module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'Express Component Starter',
      script: 'server.js',
      watch: true,
      ignore_watch: ['.git', 'node_modules', 'data', '*.log', './build', './dist', 'assets', 'uploads', 'public'],
      env: {
        DEBUG: 'pm2:*'
      }
    }
  ]
}
