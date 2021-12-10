const { fetchBadges } = require("../models/badge-model");
exports.getAllBadges = (req, res, next) => {
  fetchBadges().then((badges) => {
    res.status(200).send({ badges });
  });
};
