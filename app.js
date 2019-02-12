// ===== MODULES ===============================================================
const express = require("express");
const bodyParser = require("body-parser");

// ===== ROUTES ================================================================
const index = require("./routes/index");

const app = express();

/* =============================================
   =           Basic Configuration             =
   ============================================= */

/* ----------  Body Parser  ---------- */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ----------  Views  ---------- */
app.set("view engine", "ejs");

/* ----------  Static Assets  ---------- */
app.use(express.static("views"));
app.set("views", __dirname + "/views");

/* =============================================
   =                   Routes                  =
   ============================================= */

/* ----------  Primary / Happy Path  ---------- */

app.use("/", index);

/* ----------  Errors  ---------- */

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   res.status(404).render("./404");
// });

/* =============================================
   =                 Port Setup                =
   ============================================= */
app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function() {
  console.log("running on port", app.get("port"));
});
