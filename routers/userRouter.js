const userRouter = require("express").Router();
const {
  postNewUser,
  patchNewBadge,
  patchStreak,
} = require("../controllers/users-controllers");

userRouter.post("/", postNewUser);
userRouter.patch("/:username/badges", patchNewBadge);
userRouter.patch("/:username/streak", patchStreak);

module.exports = userRouter;
