const plantRouter = require("express").Router();
const { getAllPlants } = require("../controllers/plant-controller");

plantRouter.get("/", getAllPlants);

module.exports = plantRouter;
