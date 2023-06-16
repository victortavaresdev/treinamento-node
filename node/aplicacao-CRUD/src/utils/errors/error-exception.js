const { ErrorCode } = require("./error-code");

class ErrorException extends Error {
  code = null;
  status = null;
  message = null;

  constructor(code = ErrorCode.UnknownError, message = null) {
    super(code);

    this.code = code;
    this.status = 500;
    this.message = message;

    const { NotFound, Unauthenticated, Forbidden, BadRequest } = ErrorCode;

    if (code === NotFound) this.status = 404;
    else if (code === Unauthenticated) this.status = 401;
    else if (code === Forbidden) this.status = 403;
    else if (code === BadRequest) this.status = 400;
    else this.status = 500;
  }
}

module.exports = {
  ErrorException,
};
