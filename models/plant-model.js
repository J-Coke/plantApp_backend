const database = require("../db/connection");

exports.fetchPlants = () => {
  return database.run().then((db) => {
    return db
      .collection("plants")
      .find({})
      .toArray()
      .then((plants) => {
        return plants;
      });
  });
};
