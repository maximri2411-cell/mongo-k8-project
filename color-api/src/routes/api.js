const express = require("express");
const { getColor, getHostname } = require("../utils");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  const { format } = req.query; // e.g. localhost/api?format=json
  const color = getColor();
  const hostname = getHostname();

  if (format === "json") {
    return res.json({
      color,
      hostname,
    });
  } else {
    return res.send(`COLOR: ${color}, HOSTNAME: ${hostname}`);
  }
});

module.exports = apiRouter;