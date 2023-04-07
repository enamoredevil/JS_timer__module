export default function timer(deadline, timerBlockSelector, daysSelector, hoursSelector, minutesSelector, secondsSelector) {

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(timerBlockSelector, endtime) {
    const timer = document.querySelector(timerBlockSelector),
      days = timer.querySelector(daysSelector),
      hours = timer.querySelector(hoursSelector),
      minutes = timer.querySelector(minutesSelector),
      seconds = timer.querySelector(secondsSelector),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      if (t.total <= 0) {
          clearInterval(timeInterval);
          days.innerHTML = 0;
          hours.innerHTML = 0;
          minutes.innerHTML = 0;
          seconds.innerHTML = 0;
          return;
        }


      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

    }
  }

  setClock(timerBlockSelector, deadline);
}
