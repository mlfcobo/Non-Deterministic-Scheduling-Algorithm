const expect = require("chai").expect;
const fileParser = require("../helpers/file-parser");
const util = require("../helpers/utility");

describe("Sorting Algorithms in process3.txt", function () {
  // const data = fileParser.readFile("process3.txt", false);
  const data = [{
    name: 1,
    arrivalTime: 0,
    burstTime: 10,
    priority: 3,
    wTime: 0,
    tTime: 0
  },
  {
    name: 2,
    arrivalTime: 1,
    burstTime: 1,
    priority: 1,
    wTime: 0,
    tTime: 0
  },
  {
    name: 3,
    arrivalTime: 2,
    burstTime: 2,
    priority: 3,
    wTime: 0,
    tTime: 0
  },
  {
    name: 4,
    arrivalTime: 3,
    burstTime: 1,
    priority: 4,
    wTime: 0,
    tTime: 0
  },
  {
    name: 5,
    arrivalTime: 4,
    burstTime: 5,
    priority: 2,
    wTime: 0,
    tTime: 0
  }];

  it("Sorted by priority | data should be in the order 2 5 1 3 4", function () {
    let arr = util.sortByPriority([...data]);
    expect(util.reformatByName(arr)).to.eql([2, 5, 1, 3, 4]);
  });

  it("Sorted by name | data should be in the order 1 2 3 4 5", function () {
    let arr = [...data].sort(util.sortByName);
    expect(util.reformatByName(arr)).to.eql([1, 2, 3, 4, 5]);
  });

  it("Sorted by burst time | data should be in the order 2 4 3 5 1", function () {
    let arr = [...data].sort(util.sortByBurstTime);
    expect(util.reformatByName(arr)).to.eql([2, 4, 3, 5, 1]);
  });

  it("Sorted by arrival time | data should be in the order 1 2 3 4 5", function () {
    let arr = [...data].sort(util.sortByArrivalTime);
    expect(util.reformatByName(arr)).to.eql([1, 2, 3, 4, 5]);
  });
});
