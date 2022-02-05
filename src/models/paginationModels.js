const createId = require("../utils/createId")

const setPagination = () => {
  id = createId();
  return id
};

module.exports = {
  setPagination
};
