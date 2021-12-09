const database = require("../db/connection");

exports.insertNewUser = (newUser) => {
  return database.run().then(async (db) => {
    await db.collection("users").insertOne(newUser);
    const addedUser = await db
      .collection("users")
      .findOne({ username: newUser.username });
    return addedUser;
  });
};
