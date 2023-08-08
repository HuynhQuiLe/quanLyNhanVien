const express = require("express");
const router = express.Router();

router.get("^/$|index(.html)?", (req, res) => {
  res.json("test ok");
});

module.exports = router;
