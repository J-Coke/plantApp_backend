const userRouter = require("express").Router();
const {
	postNewUser,
	patchNewBadge,
} = require("../controllers/users-controllers");

userRouter.post("/", postNewUser);
userRouter.patch("/:username/badges", patchNewBadge);

module.exports = userRouter;
