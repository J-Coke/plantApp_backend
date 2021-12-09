const database = require("./connection");

const seed = async (data) => {
  const db = await database.run();
  await db.dropDatabase();
  await db.createCollection("users");
  await db.collection("users").insertMany(data);
  return db;
};

module.exports = seed;
