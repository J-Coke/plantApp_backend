const database = require("../db/connection");
const { validateUser, validatePlant, validateUsername } = require("../utils");
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
	await validatePlant(newPlant);
	return database.run().then((db) => {
		return db
			.collection("users")
			.findOne({ username: user })
			.then((userData) => {
				if (!userData) {
					return Promise.reject({ status: 404, message: "path not found" });
				}
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
