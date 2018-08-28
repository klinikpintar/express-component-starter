/**
 * Template file for Transformer functions
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

class ReservationTransformer {
  create (data) {
    var output = []
    data.forEach(dt => {
      output.push(dt)
    })
    return output
  }
}

module.exports = new ReservationTransformer()
