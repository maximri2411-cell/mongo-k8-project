const express = require("express");

const port = 80;
const app = express();

// Load and mount routers
const healthRouter = require("./routes/health");
app.use("/", healthRouter);

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

const rootRouter = require("./routes/root");
app.use("/", rootRouter);

app.listen(port, () => {
  console.log(`Color API listening on port: ${port}`);
});