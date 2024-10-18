function activityTable(day) {
  let res = textFile("camera_logs.txt")
  .then(logs => logs.split('\n'))
  .then(logs => logs[day])
  .then(log => textFile(log))
  .then(log => log.split('\n'))
  .then(log => log.map(stamp => Number(stamp)))
  .then(hours => {
    let arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push(0);
    }
    let cur;
    for (let cur of hours) {
      let hour = new Date(cur).getHours();
      arr[hour] += 1;
    }
    return arr
    }
    );

  return res
}

activityTable(6)
  .then(table => console.log(activityGraph(table)));