const personDAO = require("../dao/person");

class PersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    return personDAO.createPerson(firstName, lastName, email);
  }
  getPersons() {
    return personDAO.getPersons();
  }
}

module.exports = new PersonService();
