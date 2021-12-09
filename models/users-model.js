const { handle400 } = require("../controllers/error-controllers");
const database = require("../db/connection");

exports.insertNewUser = (newUser) => {
	if (
		!newUser.username ||
		!newUser.name ||
		!newUser.currentWeek ||
		!newUser.badges ||
		!newUser.streak ||
		!newUser.userPlants
	) {
		return handleCustom400();
	}
	return database.run().then(async (db) => {
		await db.collection("users").insertOne(newUser);
		const addedUser = await db
			.collection("users")
			.findOne({ username: newUser.username });
		return addedUser;
	});
};
