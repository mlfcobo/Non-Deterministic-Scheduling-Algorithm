const expect = require("chai").expect;
const fileParser = require("../helpers/file-parser");
const util = require("../helpers/utility");

describe("Sorting Algorithms in process2.txt", function () {
  const data = fileParser.readFile("process2.txt", false);
  it("Sorted by priority | data should be in the order 3 6 15 2 8 14 5 9 13 10 12 20 4 7 11 16 19 1 17 18", function () {
    let arr = util.sortByPriority([...data]);
    expect(util.reformatByName(arr)).to.eql([
      3,
      6,
      15,
      2,
      8,
      14,
      5,
      9,
      13,
      10,
      12,
      20,
      4,
      7,
      11,
      16,
      19,
      1,
      17,
      18
    ]);
  });

  it("Sorted by name | data should be in the order 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20", function () {
    let arr = [...data].sort(util.sortByName);
    expect(util.reformatByName(arr)).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]);
  });

  it("Sorted by burst time | data should be in the order 15 2 14 13 5 11 6 12 10 1 16 9 8 3 17 18 19 20 4 7", function () {
    let arr = [...data].sort(util.sortByBurstTime);
    expect(util.reformatByName(arr)).to.eql([
      15,
      2,
      14,
      13,
      5,
      11,
      6,
      12,
      10,
      1,
      16,
      9,
      8,
      3,
      17,
      18,
      19,
      20,
      4,
      7
    ]);
  });

  it("Sorted by arrival time | data should be in the order 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20", function () {
    let arr = [...data].sort(util.sortByArrivalTime);
    expect(util.reformatByName(arr)).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]);
  });
});
