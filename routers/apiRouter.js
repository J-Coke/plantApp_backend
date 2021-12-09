const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");

apiRouter.use("/users", userRouter);
apiRouter.use("/plants", plantRouter);

module.exports = apiRouter;
