const assert = require("chai").assert;
const fileParser = require("../helpers/file-parser");
const scheduler = require("../helpers/scheduler");

describe("process2.txt", function() {
  const data = fileParser.readFile("process2.txt", false);
  const payload = scheduler.run(data);
  it("FCFS | Average Waiting Time == 106.6", function() {
    assert.equal(payload.fcfs.aveWaitingTime, 106.6);
  });
  it("FCFS | Average Average Turnaround Time == 118.25", function() {
    assert.equal(payload.fcfs.aveTurnaroundTime, 118.25);
  });

  it("SJF | Average Waiting Time == 72.6", function() {
    assert.equal(payload.sjf.aveWaitingTime, 72.6);
  });
  it("SJF | Average Average Turnaround Time == 84.25", function() {
    assert.equal(payload.sjf.aveTurnaroundTime, 84.25);
  });

  it("Priority SJF| Average Waiting Time == 85.85", function() {
    assert.equal(payload.priority.sjf.aveWaitingTime, 85.85);
  });
  it("Priority SJF | Average Average Turnaround Time == 97.5", function() {
    assert.equal(payload.priority.sjf.aveTurnaroundTime, 97.5);
  });

  it("Priority FCFS | Average Waiting Time == 92", function() {
    assert.equal(payload.priority.fcfs.aveWaitingTime, 92);
  });
  it("Priority FCFS | Average Average Turnaround Time == 103.65", function() {
    assert.equal(payload.priority.fcfs.aveTurnaroundTime, 103.65);
  });
});
