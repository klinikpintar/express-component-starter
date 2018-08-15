const fs = require('fs')
const path = require('path')

class ComponentManager {
  constructor (express) {
    this.express = express
    this.path = path.join(process.env.PWD, 'components')

    this.disabledComponents = []
  }

  registerComponents () {
    fs.readdirSync(this.path).forEach(dir => {
      this.registerComponent(dir)
      this.registerModels(path.join(this.path, dir), dir)
    })
  }

  registerComponent (name) {
    if (this.isValidComponent(name)) {
      this.express.use('/api/' + name, require('components/' + name + '/' + name + '-api'))
    } else {
      console.error(path.join(this.path, name) + ' is not valid or may be disabled')
    }
  }

  registerModels (dir, name) {
    fs.readdirSync(dir).forEach(file => {
      let classFile = path.join(name, path.basename(file))
      require('components/' + classFile)
    })
  }

  isValidComponent (name) {
    let files = fs.readdirSync(path.join(this.path, name))
    let hasFile = files.includes(name + '-api.js')
    let notDisabled = !this.disabledComponents.includes(name)

    return hasFile && notDisabled
  }
}

module.exports = ComponentManager
