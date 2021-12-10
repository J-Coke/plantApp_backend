const database = require("../db/connection");

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

exports.updateStreak = (username, incStreak) => {
  if (incStreak === undefined) {
    return Promise.reject({ status: 400, message: "Invalid Request" });
  }
  return database.run().then((db) => {
    return db
      .collection("users")
      .findOne({ username: username })
      .then((userInfo) => {
        let streak = userInfo.streak;

        if (incStreak) {
          streak.currentStreak++;
          if (streak.currentStreak > streak.highestStreak) {
            streak.highestStreak = streak.currentStreak;
          }
        } else {
          streak.currentStreak = 0;
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
