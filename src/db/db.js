require("dotenv").config();
const knex = require("knex");
const { DB_URL } = require("../../config");

const db = knex({
  client: "pg",
  connection: DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
