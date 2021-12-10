const userRouter = require("express").Router();
const {
	postNewUser,
	patchNewBadge,
	patchNewPlant,
} = require("../controllers/users-controllers");

userRouter.post("/", postNewUser);
userRouter.patch("/:username/badges", patchNewBadge);
userRouter.patch("/:username/plants", patchNewPlant);
module.exports = userRouter;
