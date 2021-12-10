const { MongoClient } = require("mongodb");
const { username, password } = require("../remoteConnection");

const localUri = "mongodb://localhost:27017/";

let client = new MongoClient(localUri);

const ENV = process.env.NODE_ENV || "development";

console.log();

let dbName;
let remoteUri;

if (ENV === "development") {
  dbName = "plantApp_DEV";
} else if (ENV === "test") {
  dbName = "plantApp_TEST";
} else if (ENV === "production") {
  remoteUri = `mongodb+srv://${username}:$${password}@cluster0.m2mod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
console.log(ENV);
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
