const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");
const badgeRouter = require("./badgeRouter");
const getEndpoints = require("../controllers/api-controller");

apiRouter.use("/users", userRouter);
apiRouter.use("/plants", plantRouter);
apiRouter.use("/badges", badgeRouter);
apiRouter.get("/", getEndpoints);

module.exports = apiRouter;
