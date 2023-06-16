const { ErrorCode } = require("./error-code");
const { ErrorException } = require("./error-exception");

const errorHandler = (error, req, res, next) => {
  if (error instanceof ErrorException) return res.status(error.status).send(error);
  else return res.status(500).send({ code: ErrorCode.UnknownError, status: 500 });
};

module.exports = {
  errorHandler,
};
