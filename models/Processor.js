class Processor {
  constructor(n, t, b, p) {
    this.name = parseInt(n, 10);
    this.arrivalTime = parseInt(t, 10);
    this.burstTime = parseInt(b, 10);
    this.priority = parseInt(p, 10);
    this.wTime = 0;
    this.tTime = 0;
  }
  print() {
    console.log(`${this.name} ${this.burstTime} ${this.priority}`);
    console.log(`${this.waitingTime} ${this.turnAroundTime}`);
  }
}

module.exports = Processor;
