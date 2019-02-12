const express = require("express");
const router = express.Router();
const multer = require("multer");
const fileParser = require("../helpers/file-parser");
const scheduler = require("../helpers/scheduler");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "files");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + ".txt");
  }
});

var upload = multer({ storage: storage });
/**
 * GET /
 *
 * Renders homepage
 */
router.get("/", function(req, res) {
  res.render("index", { payload: [] });
});

/**
 * POST /
 *
 * Uploads input file
 */
router.post("/", upload.single("input"), function(req, res) {
  const filename = req.file.filename;
  const data = fileParser.readFile(filename, true);
  const payload = scheduler.run(data);
  console.log(payload);
  res.status(200).render("index", { payload });
});

module.exports = router;
