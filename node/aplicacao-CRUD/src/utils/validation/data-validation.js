const Validator = require("validatorjs");

const dataValidation = (body, rules) => {
  const validation = new Validator(body, rules);
  const isDataValid = validation.passes();
  const validationErrors = validation.errors.errors;

  return {
    isDataValid,
    validationErrors,
  };
};

module.exports = {
  dataValidation,
};
