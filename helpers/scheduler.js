const fcfs = require("./fcfs");
const sjf = require("./sjf");
const priority = require("./priority");

function run(data) {
  const payload = {
    data: data,
    fcfs: fcfs.run(data),
    sjf: sjf.run(data),
    priority: priority.run(data)
    // rrobin: rrobin.run(data)
  };
  return payload;
}

module.exports = {
  run
};
