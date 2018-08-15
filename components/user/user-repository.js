// wrapper for ORM / Persistence libraries. all persistence data related should go through here

class UserRepository {
  async find (criteria) {

  }
  async create (object) {
    return object
  }
  async delete (criteria) {

  }

  // hmm
  async save () {

  }
  async update () {

  }
}

module.exports = UserRepository
