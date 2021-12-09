const database = require("./connection");
const data = require("./test-data/index");
const seed = require("./seed");

const runSeed = () => {
	return seed(data)
		.catch((err) => {
			console.log("run-seed", err);
		})
		.finally(() => {
			database.client.close();
		});
};

runSeed();
