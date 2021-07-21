const cors = require("cors");

const CLIENT_ORIGIN = {
  origin: [
    "http://localhost:3000/",
    "http://localhost:3000/api/v1/",
    "http://localhost:3050/api/v1/",
    "http://localhost:3050/",
    "https://mysterious-basin-15345.herokuapp.com/api/v1/mailingList",
    "https://mysterious-basin-15345.herokuapp.com/",
  ],
  optionsSuccessStatus: 200,
};

module.exports = cors(CLIENT_ORIGIN);
