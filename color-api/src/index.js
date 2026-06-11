const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const port = 80;
const app = express();

// Load bodyParser middleware BEFORE mounting routers
app.use(bodyParser.json());

// Load and mount routers
const healthRouter = require("./routes/health");
app.use("/", healthRouter);

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

const rootRouter = require("./routes/root");
app.use("/", rootRouter);

// Mongo connect
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Could not connect to MongoDB");
    console.error(error);
  });