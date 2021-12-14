const userRouter = require("express").Router();
const {
	postNewUser,
	patchNewBadge,
	patchStreak,
	patchNewPlant,
	patchWeek,
	getUser,
	getAllUsers,
} = require("../controllers/users-controllers");

userRouter.post("/", postNewUser);
userRouter.patch("/:username/badges", patchNewBadge);
userRouter.patch("/:username/streak", patchStreak);
userRouter.patch("/:username/plants", patchNewPlant);
userRouter.get("/:username", getUser);
userRouter.get("/", getAllUsers);
userRouter.patch("/:username/currentweek", patchWeek);
module.exports = userRouter;
