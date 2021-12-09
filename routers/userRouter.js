const userRouter = require("express").Router();
const { postNewUser } = require("../controllers/users-controllers");

userRouter.post("/", postNewUser);

module.exports = userRouter;
