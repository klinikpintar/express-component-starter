/**
 * Template file for Validate functions
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

module.exports = {
  request: {
    create (req, res, next) {
      console.warn('implement your request validation here')
      next()
    }
  },
  response: {
    create (req, res, next) {
      console.warn('implement your response validation here')
      next()
    }
  }
}
