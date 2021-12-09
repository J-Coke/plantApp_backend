const database = require("../db/connection");
exports.fetchBadges = () => {
  return database.run().then((db) => {
    return db
      .collection("badges")
      .find({})
      .toArray()
      .then((badges) => {
        return badges;
      });
  });
};
