const {
  insertNewUser,
  addNewBadge,
  updateStreak,
} = require("../models/users-model");

exports.postNewUser = (req, res, next) => {
  const newUser = req.body;
  insertNewUser(newUser)
    .then((addedUser) => {
      res.status(201).send(addedUser);
    })
    .catch(next);
};

exports.patchNewBadge = (req, res, next) => {
  const newBadge = req.body;
  const user = req.params.username;
  addNewBadge(user, newBadge)
    .then((userData) => {
      res.status(201).send(userData);
    })
    .catch(next);
};

exports.patchStreak = (req, res, next) => {
  const { username } = req.params;
  const { incStreak } = req.body;
  updateStreak(username, incStreak).then((streak) => {
    res.status(200).send({ streak });
  });
};
