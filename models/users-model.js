const database = require("../db/connection");
const { validateUser, validatePlant, validateUsername } = require("../utils");
exports.insertNewUser = async (newUser) => {
	await validateUser(newUser);
	await validateUsername(newUser.username);
	newUser.joined = new Date(Date.now());
	return database.run().then(async (db) => {
		await db.collection("users").insertOne(newUser);
		const addedUser = await db
			.collection("users")
			.findOne({ username: newUser.username });
		console.log(addedUser);
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
					return Promise.reject({ status: 404, message: "path not found" });
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

exports.addNewPlant = async (user, newPlant) => {
	// await validatePlant(newPlant);
	return database.run().then((db) => {
		return db
			.collection("users")
			.findOne({ username: user })
			.then((userData) => {
				if (!userData) {
					return Promise.reject({ status: 404, message: "path not found" });
				}
				let plantData = userData.userPlants;
				let weekData = userData.currentWeek;
				const filterPlant = plantData.filter(
					(plant) => plant.name !== newPlant.name
				);
				const filterWeek = weekData.filter(
					(plant) => plant.name !== newPlant.name
				);
				if (filterPlant.length === plantData.length) {
					plantData.push(newPlant);
				}
				if (filterWeek.length === weekData.length) {
					weekData.push(newPlant);
				} else
					return Promise.reject({ status: 400, message: "Plant already added to current week" });
				return { plantData, weekData };
			})
			.then(({ plantData, weekData }) => {
				return db
					.collection("users")
					.updateOne(
						{ username: user },
						{ $set: { userPlants: plantData, currentWeek: weekData } }
					);
			})
			.then(() => {
				return db.collection("users").findOne({ username: user });
			});
	});
};

exports.updateStreak = (username, incStreak) => {
	if (incStreak === undefined) {
		return Promise.reject({ status: 400, message: "Invalid Request" });
	}
	return database.run().then((db) => {
		return db
			.collection("users")
			.findOne({ username: username })
			.then((userInfo) => {
				if (!userInfo) {
					return Promise.reject({ status: 404, message: "path not found" });
				}

				let streak = userInfo.streak;

				if (incStreak === true) {
					streak.currentStreak++;
					if (streak.currentStreak > streak.highestStreak) {
						streak.highestStreak = streak.currentStreak;
					}
				} else if (incStreak === false) {
					streak.currentStreak = 0;
				} else {
					return Promise.reject({ status: 400, message: "Invalid Request" });
				}

				return db
					.collection("users")
					.updateOne({ username: username }, { $set: { streak: streak } });
			})
			.then(() => {
				return db.collection("users").findOne({ username: username });
			})
			.then((userInfo) => {
				return userInfo.streak;
			});
	});
};

exports.fetchUser = (username) => {
	return database.run().then((db) => {
		return db
			.collection("users")
			.findOne({ username: username })
			.then((userInfo) => {
				if (userInfo) return userInfo;
				return Promise.reject({ status: 404, message: "path not found" });
			});
	});
};

exports.fetchAllUsers = () => {
	return database.run().then((db) => {
		return db
			.collection("users")
			.find({})
			.toArray()
			.then((allUsers) => {
				return allUsers;
			});
	});
};

exports.updateWeek = (username) => {
	return database.run().then((db) => {
		return db
			.collection("users")
			.updateOne({ username: username }, { $set: { currentWeek: [] } })
			.then(() => {
				return db.collection("users").findOne({ username: username });
			});
	});
};
