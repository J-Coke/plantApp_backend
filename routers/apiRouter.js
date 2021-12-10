const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");
const badgeRouter = require("./badgeRouter");

apiRouter.use("/users", userRouter);
apiRouter.use("/plants", plantRouter);
apiRouter.use("/badges", badgeRouter);

module.exports = apiRouter;
