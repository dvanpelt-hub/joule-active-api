require("dotenv").config();
const knex = require("knex");
const { DATABASE_URL } = require("../../config");

const db = knex({
  client: "pg",
  connection: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
