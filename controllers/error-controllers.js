const handle400 = (err, req, res, next) => {
	return Promise.reject({ status: 400, message: "Invalid Request" });
};

const handle404 = (err, req, res, next) => {
	if (err.status === 404) {
		res.status(err.status).send({ message: "path not found" });
	} else next(err);
};

const handleCustom = (err, req, res, next) => {
	if (err.status && err.message) {
		res.status(err.status).send({ message: err.message });
	} else {
		next(err);
	}
};

const handle500 = (err, req, res, next) => {
	if (err.status === 500) {
		res.status(err.status).send({ message: "server error" });
	}
};
module.exports = { handle400, handle404, handle500, handleCustom };
