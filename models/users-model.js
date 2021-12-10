const database = require("../db/connection");
const handle400 = require("../controllers/error-controllers");

exports.insertNewUser = (newUser) => {
	if (!newUser.name || !newUser.badges) {
		return Promise.reject({ status: 400, message: "Invalid Request" });
	}
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
