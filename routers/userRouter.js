const userRouter = require("express").Router();
const { postNewUser } = require("../controllers/users_controllers");

userRouter.post("/", postNewUser);

module.exports = userRouter;
