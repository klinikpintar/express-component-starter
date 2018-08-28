// transform response

class UserTransformer {
  create (data) {
    var output = []
    data.forEach(dt => {
      output.push(dt)
    })
    return output
  }
}

module.exports = new UserTransformer()
