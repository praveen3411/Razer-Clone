const express = require("express");
const cors = require("cors");
const compression = require("compression");
let port = 8000;
let app = express();
app.use(express.json());
app.use(cors());
app.use(compression());
app.use("/", async (req, res) => {
  res.send("App is running successful");
});
app.listen(port, async (req, res) => {
  console.log(`App is running on localhost port ${port} successfully`);
});
