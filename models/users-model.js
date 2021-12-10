const database = require("../db/connection");
const { validateUser, validateUsername } = require("../utils");
exports.insertNewUser = async (newUser) => {
	await validateUser(newUser);
	await validateUsername(newUser.username);
	return database.run().then(async (db) => {
		await db.collection("users").insertOne(newUser);
		const addedUser = await db
			.collection("users")
			.findOne({ username: newUser.username });
		return addedUser;
	});
};

exports.addNewBadge = (user, newBadge) => {
	return database.run().then((db) => {
		return db
			.collection("users")
			.findOne({ username: user })
			.then((userInfo) => {
				if (!userInfo) {
					return Promise.reject({ status: 404, message: "Invalid Request" });
				}
				let badgeData = userInfo.badges;
				badgeData.push(newBadge);
				return badgeData;
			})
			.then((badgeData) => {
				return db
					.collection("users")
					.updateOne({ username: user }, { $set: { badges: badgeData } });
			})
			.then(() => {
				return db
					.collection("users")
					.findOne({ username: user })
					.then((userData) => {
						return userData;
					});
			});
	});
};

exports.addNewPlant = (user, newPlant) => {
	return database.run().then((db) => {
		return db
			.collection("users")
			.findOne({ username: user })
			.then((userData) => {
				let plantData = userData.userPlants;
				plantData.push(newPlant);
				return plantData;
			})
			.then((plantData) => {
				return db
					.collection("users")
					.updateOne({ username: user }, { $set: { userPlants: plantData } });
			})
			.then(() => {
				return db.collection("users").findOne({ username: user });
			});
	});
};
