const expect = require("chai").expect;
const fileParser = require("../helpers/file-parser");
const util = require("../helpers/utility");
const sortObjects = require("sort-objects-array");

describe("Sorting Algorithms in process1.txt", function() {
    const data = fileParser.readFile("process1.txt", false);
    it("Sorted by priority | data should be in the order 1 2 11 3 4 12 5 7 10 13 18 20 6 9 19 8 16 17 14 15", function() {
        let arr = util.sortByPriority([...data]);
        expect(util.reformatByName(arr)).to.eql([
            1,
            2,
            11,
            3,
            4,
            12,
            5,
            7,
            10,
            13,
            18,
            20,
            6,
            9,
            19,
            8,
            16,
            17,
            14,
            15
        ]);
    });

    it("Sorted by name | data should be in the order 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20", function() {
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

    it("Sorted by burst time | data should be in the order 14 15 13 20 4 6 18 19 3 5 7 17 8 16 2 9 10 1 12 11", function() {
        // let arr = [...data].sort(util.sortByBurstTime);
        let arr = sortObjects(data, "burstTime");
        expect(util.reformatByName(arr)).to.eql([
            14,
            15,
            13,
            20,
            4,
            6,
            18,
            19,
            3,
            5,
            7,
            17,
            8,
            16,
            2,
            9,
            10,
            1,
            12,
            11
        ]);
    });

    it("Sorted by arrival time | data should be in the order 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20", function() {
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
