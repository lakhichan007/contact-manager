const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const login = require("./routes/login");
const register = require("./routes/register");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://contactmanager:contactmanager@cluster0.jvlvlig.mongodb.net/Contact-Manager?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log("Database Connected");
  }
);

app.use(express.json());
app.use(bodyParser.json());
app.use("/Contact", route);
app.use("/login", login);
app.use("/register", register);

app.get("*", (req, res) => {
  res.status(404).json({
    status: "Failed",
    message: "Invalid Path",
  });
});

app.listen(PORT, () => {
  console.log(`Server is up at http://localhost:${PORT}/`);
});
