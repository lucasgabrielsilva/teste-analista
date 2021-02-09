const express = require("express");
const Controller = require("../controllers");
const routes = express.Router();

routes.post("/checkcep", Controller.checkCEP);
routes.get("/cursos", Controller.getCursos);

module.exports = routes;