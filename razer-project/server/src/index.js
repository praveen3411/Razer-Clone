const express = require("express");
const cors = require("cors");
const compression = require("compression");
let port = 8000;
let app = express();
app.use(express.json());
app.use(cors());
app.use(compression());
app.use("/", async (req, res) => {
  res.send("App is running successful and ready to work with Backend 🥳");
});
app.listen(port, async (req, res) => {
  console.log(`Our app is running on ${port} successfully`);
});
