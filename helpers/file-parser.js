const Processor = require("../models/Processor");
const fs = require("fs");

const readFile = (filename, del) => {
  var filepath = `files/${filename}`;
  var contents = fs.readFileSync(filepath, { encoding: "utf8" });
  if (del) {
    fs.unlink(filepath, function (err) {
      if (err) throw err;
      console.log("Successfully deleted " + filepath);
    });
  }
  var data = [];
  var fields = contents.split(",");
  for (var i = 4; i < fields.length; i += 4) {
    data.push(
      new Processor(fields[i], fields[i + 1], fields[i + 2], fields[i + 3])
    );
  }
  return data;
};

module.exports = {
  readFile
};
