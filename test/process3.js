const assert = require("chai").assert;
const fileParser = require("../helpers/file-parser");
const scheduler = require("../helpers/scheduler");

describe("process3.txt", function() {
  const data = fileParser.readFile("process3.txt", false);
  const payload = scheduler.run(data);
  it("FCFS | Average Waiting Time == 9.6", function() {
    assert.equal(payload.fcfs.aveWaitingTime, 9.6);
  });
  it("FCFS | Average Average Turnaround Time == 13.4", function() {
    assert.equal(payload.fcfs.aveTurnaroundTime, 13.4);
  });

  it("SJF | Average Waiting Time == 3.2", function() {
    assert.equal(payload.sjf.aveWaitingTime, 3.2);
  });
  it("SJF | Average Average Turnaround Time == 7", function() {
    assert.equal(payload.sjf.aveTurnaroundTime, 7);
  });

  it("Priority SJF| Average Waiting Time == 6.6", function() {
    assert.equal(payload.priority.sjf.aveWaitingTime, 6.6);
  });
  it("Priority SJF | Average Average Turnaround Time == 10.4", function() {
    assert.equal(payload.priority.sjf.aveTurnaroundTime, 10.4);
  });

  it("Priority FCFS | Average Waiting Time == 8.2", function() {
    assert.equal(payload.priority.fcfs.aveWaitingTime, 8.2);
  });
  it("Priority FCFS | Average Average Turnaround Time == 12", function() {
    assert.equal(payload.priority.fcfs.aveTurnaroundTime, 12);
  });
});
