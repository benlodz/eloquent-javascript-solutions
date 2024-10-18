async function activityTable(day) {
  let logFileList = await textFile("camera_logs.txt");
  // split logs into array we can index
  let logs = logFileList.split('\n');
  let log = await textFile(logs[day]);
  log = log.split('\n');
  let res = []

  for (let i = 0; i < 24; i++) {
    res.push(0);
    }
  let cur;
  for (let stamp of log) {
    cur = new Date(Number(stamp));
    let hour = cur.getHours();
    res[hour] += 1;
    
  }
  return res
}

activityTable(1)
  .then(table => console.log(activityGraph(table)));