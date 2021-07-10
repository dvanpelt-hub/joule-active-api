require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

app.use(cors);
app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("JOULE Active");
});

module.exports = app;
