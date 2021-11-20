const db = require("../db/db");

class PersonDAO {
  async createPerson(firstName, lastName, email) {
    const [id] = await db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id");

    return id;
  }

  async getPersons() {
    const res = await db.select("email", "first_name").from("person");
    return res;
  }
}

module.exports = new PersonDAO();
