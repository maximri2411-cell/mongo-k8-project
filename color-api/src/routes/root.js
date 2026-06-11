const express = require("express");
const { getHostname } = require("../utils");
const { getColor } = require("../db/color");

const rootRouter = express.Router();

rootRouter.get("/", async (req, res) => {
  const { colorKey } = req.query; // e.g. localhost/?colorKey=primary
  const color = await getColor(colorKey)
  const hostname = getHostname();

  res.json({
    color,
    hostname,
  });
});

module.exports = rootRouter;
