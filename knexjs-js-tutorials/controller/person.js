const personService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getPersons(req, res) {
    try {
      const resBody = await personService.getPersons();
      res.status(200).json(resBody);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new PersonController();
