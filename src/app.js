require("dotenv").config();
const express = require("express");
const mailingListRouter = require("./routes/mailing-list-router");
const corsMiddleware = require("./cors/cors");
const helmet = require("helmet");
const app = express();

app.use(corsMiddleware);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});
app.use(express.json());
app.use(helmet());

app.use("/api/v1", mailingListRouter);

module.exports = app;
