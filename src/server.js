require("dotenv").config();
const app = require("./app");
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`App is up and running on PORT: ${PORT}`);
});
