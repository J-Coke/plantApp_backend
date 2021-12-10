const badgeRouter = require("express").Router();
const { getAllBadges } = require("../controllers/badge-controller");

badgeRouter.get("/", getAllBadges);

module.exports = badgeRouter;
