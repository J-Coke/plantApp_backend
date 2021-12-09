const { fetchPlants } = require("../models/plant-model");

exports.getAllPlants = (req, res, next) => {
  fetchPlants()
    .then((plants) => {
      res.status(200).send({ plants });
    })
    .catch(next);
};
