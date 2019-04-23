const sortByName = (a, b) => {
    return a.name - b.name;
};

const reformatByName = (d) => {
    return d.map((obj) => {
        return obj.name;
    });
};

const sortByPriority = (arr) => {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1].priority > arr[j].priority) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

const sortByBurstTime = (a, b) => {
    return Number(a.burstTime) - Number(b.burstTime);
};

const sortByArrivalTime = (a, b) => {
    return a.arrivalTime - b.arrivalTime;
};

module.exports = {
    sortByName,
    sortByArrivalTime,
    sortByPriority,
    sortByBurstTime,
    reformatByName
};
