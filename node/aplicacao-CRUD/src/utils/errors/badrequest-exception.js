const { ErrorCode } = require("./error-code");
const { ErrorException } = require("./error-exception");

const badRequestException = (message, next) => {
  const error = new ErrorException(ErrorCode.BadRequest, message);
  next(error);

  throw error;
};

module.exports = {
  badRequestException,
};
