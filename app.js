// ===== MODULES ===============================================================
const express = require("express");
const bodyParser = require("body-parser");

// ===== ROUTES ================================================================
const index = require("./routes/index");

const app = express();
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "files");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + ".txt");
    }
});

var upload = multer({ storage: storage });

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

app.post("/upload", upload.single("fileToUpload"), function(req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log("/profile upload");
    console.log("req.headers", req.headers);
    console.log("req.file =", req.file);
    const name = req.file && req.file.originalname;
    const email = req.body && req.body.userid;
    console.log("req.body", req.body);
    res.send(
        `
    <html>
      <body>
        <p>Uploaded ${name || "undefined"}</p>
        <p>for ${email || "unknown"}</p>
      </body>
    </html>
  `
    ).end();
    // res.redirect('/success.html')
});

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
