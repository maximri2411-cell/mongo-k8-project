const express = require("express");
const { getHostname } = require("../utils");
const { getColor } = require("../db/color");

const apiRouter = express.Router();

apiRouter.get("/", async (req, res) => {
  const { format, colorKey } = req.query; // e.g. localhost/api?format=json&colorKey=primary
  const color = await getColor(colorKey)
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