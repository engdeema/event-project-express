const express = require("express");
const { connect } = require("mongoose");
const eventRouters = require("./api/events/routes");
const connectDB = require("./db/models/database");
const app = express();
// const connectDB = require ("./db")
app.use(express.json());
app.use("/api/events", eventRouters);
connectDB();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`This app is working on localhost: ${PORT}`);
});
