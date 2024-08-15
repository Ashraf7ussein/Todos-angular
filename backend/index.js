const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const todos = require("./routes/todos");

const app = express();

mongoose
  .connect("mongodb+srv://ashrafhussein1997:12345@cluster0.siunt.mongodb.net/")
  .then((res) => console.log("Connected to mongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const port = process.env.port || 3000;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(cors());
app.use("/api/todos", todos);

module.exports = server;
