const database = require("./connection");

const createDbs = async () => {
	await database.client.connect();
	const dbDev = await database.client.db("plantApp_DEV");
	const dbTest = await database.client.db("plantApp_TEST");
	await dbDev.createCollection("users");
	await dbDev.createCollection("badges");
	await dbDev.createCollection("plants");
	await dbTest.createCollection("users");
	await dbTest.createCollection("badges");
	await dbTest.createCollection("plants");
	return database.client.close();
};

createDbs();
