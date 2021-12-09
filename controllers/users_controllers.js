const { insertNewUser } = require("../models/users_model");

exports.postNewUser = (req, res, next) => {
	const newUser = req.body;
	insertNewUser(newUser)
		.then((addedUser) => {
			res.status(201).send(addedUser);
		})
		.catch(next);
};
