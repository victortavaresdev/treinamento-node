const postRules = () => {
  return {
    title: "required|string|max:100",
    content: "required|string|max:255",
  };
};

module.exports = {
  postRules,
};
