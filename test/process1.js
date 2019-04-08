const assert = require("chai").assert;
const fileParser = require("../helpers/file-parser");
const scheduler = require("../helpers/scheduler");

describe("process1.txt", function () {
  const data = fileParser.readFile("process1.txt", false); // 
  const payload = scheduler.run(data);

  it("FCFS | Average Waiting Time == 128", function () {
    assert.equal(payload.fcfs.aveWaitingTime, 128);
  });

  it("FCFS | Average Average Turnaround Time == 140.55", function () {
    assert.equal(payload.fcfs.aveTurnaroundTime, 140.55);
  });

  it("SJF | Average Waiting Time == 89.5", function () {
    assert.equal(payload.sjf.aveWaitingTime, 89.5);
  });
  it("SJF | Average Average Turnaround Time == 102.05", function () {
    assert.equal(payload.sjf.aveTurnaroundTime, 102.05);
  });

  it("Priority SJF| Average Waiting Time == 134.2", function () {
    assert.equal(payload.priority.sjf.aveWaitingTime, 134.2);
  });
  it("Priority SJF | Average Average Turnaround Time == 146.75", function () {
    assert.equal(payload.priority.sjf.aveTurnaroundTime, 146.75);
  });

  it("Priority FCFS | Average Waiting Time == 137.3", function () {
    assert.equal(payload.priority.fcfs.aveWaitingTime, 137.3);
  });
  it("Priority FCFS | Average Average Turnaround Time == 149.85", function () {
    assert.equal(payload.priority.fcfs.aveTurnaroundTime, 149.85);
  });

});
