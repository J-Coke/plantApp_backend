const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
const { handle500, handleCustom } = require("./controllers/error-controllers");
app.use(express.json());

app.use("/api", apiRouter);
app.use(handleCustom);
app.use(handle500);
app.all("*", (req, res) => {
	res.status(404).send({ message: "path not found" });
});

module.exports = app;
