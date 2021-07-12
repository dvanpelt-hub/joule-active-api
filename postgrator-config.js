require("dotenv").config();

module.exports = {
  migrationsDirector: "migrations",
  driver: "pg",
  connectionString: process.env.DB_URL,
};
