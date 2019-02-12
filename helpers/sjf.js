const util = require("./utility");

function SJF(data) {
  this.data = data;
  this.sortedData = [];
  this.accumWaitingTime = 0;
  this.accumTurnaroundTime = 0;
  this.aveWaitingTime = 0;
  this.aveTurnaroundTime = 0;
}

const run = content => {
  var sjf = new SJF(content);
  var length = sjf.data.length;
  sjf.data.sort(util.sortByBurstTime);
  var wTime = 0;
  var tTime = 0;
  for (var i = 0; i < length; i++) {
    tTime += sjf.data[i].burstTime;
    sjf.data[i].wTime = wTime;
    sjf.accumWaitingTime += wTime;
    sjf.data[i].tTime = tTime;
    sjf.accumTurnaroundTime += tTime;
    wTime = tTime;
  }
  sjf.aveWaitingTime = sjf.accumWaitingTime / length;
  sjf.aveTurnaroundTime = sjf.accumTurnaroundTime / length;
  sjf.sortedData = JSON.parse(JSON.stringify(sjf.data));
  sjf.sortedData.sort(util.sortByName);

  return sjf;
};

module.exports = {
  run
};
