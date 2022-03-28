document.querySelectorAll('.timer').forEach(timer => {
  let [day, month, year, other] = timer.dataset.expirationDate.split("-");
  let [hours, minutes, seconds] = other.split(":");
  let expirationDate = new Date(year, month, day, hours, minutes, seconds);
  let timeToEnd = new Date(expirationDate - new Date);
  timer.querySelector(".timer__days").innerText = (Math.ceil(timeToEnd.getTime() / (1000 * 3600 * 24)));
  timer.querySelector(".timer__hrs").innerText = timeToEnd.getHours();
  timer.querySelector(".timer__min").innerText = timeToEnd.getMinutes();
  timer.querySelector(".timer__secs").innerText = timeToEnd.getSeconds();

  let interval = setInterval(function () {
    if (+timer.querySelector(".timer__secs").innerText > 0) {
      timer.querySelector(".timer__secs").innerText = (+timer.querySelector(".timer__secs").innerText - 1) + "";
    } else {
      timer.querySelector(".timer__secs").innerText = "59";

      if (+timer.querySelector(".timer__min").innerText > 0) {
        timer.querySelector(".timer__min").innerText = (+timer.querySelector(".timer__min").innerText - 1) + "";
      } else {
        timer.querySelector(".timer__min").innerText = "59";

        if (+timer.querySelector(".timer__hrs").innerText > 0) {
          timer.querySelector(".timer__hrs").innerText = (+timer.querySelector(".timer__hrs").innerText - 1) + "";
        } else {
          timer.querySelector(".timer__hrs").innerText = "59";

          timer.querySelector(".timer__days").innerText = (+timer.querySelector(".timer__days").innerText - 1) + "";

        }

      }

    }
  }, 1000);

})