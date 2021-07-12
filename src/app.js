require("dotenv").config();
const express = require("express");
const mailingListRouter = require("./routes/mailing-list-router");
const app = express();
const cors = require("cors");
const { CLIENT_ORIGIN } = require("../cors/cors");
const helmet = require("helmet");

app.use(cors(CLIENT_ORIGIN));
app.use(express.json());
app.use(helmet());

app.use("/api/v1", mailingListRouter);

module.exports = app;
