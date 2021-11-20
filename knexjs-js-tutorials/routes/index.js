const express = require("express");
const personController = require("../controller/person");

const router = express.Router();
router.post("/person", personController.createPerson);
router.get("/persons", personController.getPersons);

module.exports = router;
