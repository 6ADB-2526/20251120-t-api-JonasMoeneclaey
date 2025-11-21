const express = require("express");
const ctrlKinderen = require("../controllers/kinderen")

const routes = express.Router();


routes.get("/", ctrlKinderen.alleKindjes)

module.exports = routes