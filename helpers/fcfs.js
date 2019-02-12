function FCFS(data) {
  this.data = data;
  this.accumWaitingTime = 0;
  this.accumTurnaroundTime = 0;
  this.aveWaitingTime = 0;
  this.aveTurnaroundTime = 0;
}

const run = content => {
  var fcfs = new FCFS(content);
  var length = fcfs.data.length;
  var wTime = 0;
  var tTime = 0;
  for (var i = 0; i < length; i++) {
    tTime += fcfs.data[i].burstTime;
    fcfs.data[i].wTime = wTime;
    fcfs.accumWaitingTime += wTime;
    fcfs.data[i].tTime = tTime;
    fcfs.accumTurnaroundTime += tTime;
    wTime = tTime;
  }
  fcfs.aveWaitingTime = fcfs.accumWaitingTime / length;
  fcfs.aveTurnaroundTime = fcfs.accumTurnaroundTime / length;
  return fcfs;
};

module.exports = {
  run
};
