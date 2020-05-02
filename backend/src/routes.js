const express = require("express");

const routes = express.Router();

const connection = require("./database/connection");

const PeopleController = require("./database/controllers/PeopleController");

routes.post("/people", PeopleController.create);

routes.delete("/people/:id", PeopleController.delete);

routes.get("/people", PeopleController.index);


module.exports = routes;
