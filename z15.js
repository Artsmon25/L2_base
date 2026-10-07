function howManyTimes(_time1,_time2)
{
    let time1 = new Date(_time1), time2 = new Date(_time2)
    let hits = 0

    while (time1 < time2) {
      let diff = time2 - time1
      let s = Math.floor(diff / 1000)
      let m = diff / 1000 / 60

      let hit_count = time1.getHours()%12
      if (hit_count == 0) hit_count = 12
      
      if (time1.getMinutes() == 0) hits += Math.min(Math.max(0, hit_count - time1.getSeconds()), s)
      if (time1.getMinutes() <= 30 && m > 30) hits += 1

      time1.setHours(time1.getHours() + 1)
      time1.setMinutes(0)
      time1.setSeconds(0)
    }
    
    return hits
  }