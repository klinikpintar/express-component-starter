require('dotenv').config()
require('app-module-path').addPath(process.env.PWD || __dirname)
require('app').run()
