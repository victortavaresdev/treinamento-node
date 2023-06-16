class ErrorCode {
  static NotFound = "NOT_FOUND";
  static Unauthenticated = "UNAUTHORIZED";
  static Forbidden = "FORBIDDEN";
  static BadRequest = "BAD_REQUEST";
  static UnknownError = "UNKNOWN_ERROR";
}

module.exports = {
  ErrorCode,
};
