const userRules = () => {
  return {
    name: "required|string|max:100",
    email: "required|email|string|max:100",
  };
};

module.exports = {
  userRules,
};
