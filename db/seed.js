const database = require("./connection");

const seed = async (data) => {
	const { plantData, badgeData, userData } = data;
	const db = await database.run();
	// await db.dropDatabase();
	await db.dropCollection("users");
	await db.dropCollection("badges");
	await db.dropCollection("plants");
	await db.createCollection("users");
	await db.createCollection("badges");
	await db.createCollection("plants");
	await db.collection("users").insertMany(userData);
	await db.collection("badges").insertMany(badgeData);
	await db.collection("plants").insertMany(plantData);
	return db;
};

module.exports = seed;
