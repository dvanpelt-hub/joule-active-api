require("dotenv").config();
const express = require("express");
const mailingListRouter = require("./routes/mailing-list-router");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors);
app.use(express.json());
app.use(helmet());

app.use("/api/v1", mailingListRouter);

module.exports = app;
