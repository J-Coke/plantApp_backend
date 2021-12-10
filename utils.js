const database = require("./db/connection");
const validateUser = async (newUser) => {
  if (
    !newUser.name ||
    typeof newUser.name !== "string" ||
    !newUser.badges ||
    typeof newUser.badges !== "object" ||
    !newUser.name ||
    typeof newUser.name !== "string" ||
    !newUser.currentWeek ||
    typeof newUser.currentWeek !== "object" ||
    !newUser.streak ||
    typeof newUser.streak !== "object" ||
    !newUser.userPlants ||
    typeof newUser.userPlants !== "object"
  ) {
    return Promise.reject({ status: 400, message: "Invalid Request" });
  }
};

const validateUsername = async (username) => {
  return database.run().then((db) => {
    return db
      .collection("users")
      .findOne({ username: username })
      .then((userInfo) => {
        if (!userInfo) {
          return username;
        } else
          return Promise.reject({ status: 400, message: "Invalid Request" });
      });
  });
};

module.exports = { validateUser, validateUsername };
