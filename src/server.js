const express = require("express");
const app = express();
const port = 3020;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`App is up and running on PORT: ${port}`);
});
