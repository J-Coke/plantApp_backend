const database = require("./connection");
const initialUsers = require("./test-data/user-data");
const seed = require("./seed");

const runSeed = () => {
  return seed(initialUsers)
    .catch((err) => {
      console.log("run-seed", err);
    })
    .finally(() => {
      database.client.close();
    });
};

runSeed();
