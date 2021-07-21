const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000/", "https://joule-active-client.vercel.app"],
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
