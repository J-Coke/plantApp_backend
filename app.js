const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", (req, res) => {
	res.status(404).send({ message: "path not found" });
});

module.exports = app;
