const cors = require("cors");

const CLIENT_ORIGIN = {
  origin: ["http://localhost:3050/api/v1", "http://localhost:3050"],
  optionsSuccessStatus: 200,
};

module.exports = cors(CLIENT_ORIGIN);
