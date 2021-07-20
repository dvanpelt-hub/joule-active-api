require("dotenv").config();

module.exports = {
  migrationsDirector: "migrations",
  driver: "pg",
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: required,
  },
};
