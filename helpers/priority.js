const util = require("./utility");

function Priority(data) {
    this.data = data;
    this.sortedData = [];
    this.accumWaitingTime = 0;
    this.accumTurnaroundTime = 0;
    this.aveWaitingTime = 0;
    this.aveTurnaroundTime = 0;
}

const run = (content) => {
    // Priority - SJF
    var prioritySJF = new Priority(content);
    prioritySJF.data.sort(util.sortByBurstTime);
    prioritySJF.data = util.sortByPriority(prioritySJF.data);
    const sjf = execute(prioritySJF);
    // Priority - FCFS
    var priorityFCFS = new Priority(content);
    priorityFCFS.data.sort(util.sortByArrivalTime);
    priorityFCFS.data = util.sortByPriority(priorityFCFS.data);
    const fcfs = execute(priorityFCFS);

    const payload = {
        sjf: sjf,
        fcfs: fcfs
    };
    return payload;
};

const execute = (prioObj) => {
    var length = prioObj.data.length;
    var wTime = 0;
    var tTime = 0;

    for (var i = 0; i < length; i++) {
        tTime += prioObj.data[i].burstTime;
        prioObj.data[i].wTime = wTime;
        prioObj.accumWaitingTime += wTime;
        prioObj.data[i].tTime = tTime;
        prioObj.accumTurnaroundTime += tTime;
        wTime = tTime;
    }
    prioObj.aveWaitingTime = prioObj.accumWaitingTime / length;
    prioObj.aveTurnaroundTime = prioObj.accumTurnaroundTime / length;
    prioObj.sortedData = prioObj.data;
    prioObj.sortedData.sort(util.sortByName);
    return prioObj;
};

module.exports = {
    run
};
