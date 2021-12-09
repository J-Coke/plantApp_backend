const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

const ENV = process.env.NODE_ENV || "development";

let dbName;

if (ENV === "development") {
  dbName = "plantApp_DEV";
} else {
  dbName = "plantApp_TEST";
}

const run = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.log("issue connecting ");
  }
};

module.exports = { run, client };
