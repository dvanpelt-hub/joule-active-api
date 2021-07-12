require("dotenv").config();
const app = require("./app");
const db = require("./db/db");
const { PORT } = process.env;

app.set("db", db);

app.listen(PORT, () => {
  console.log(`App is up and running on PORT: ${PORT}`);
});
