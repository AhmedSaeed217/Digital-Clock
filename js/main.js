function clock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let dateOfDay = now.toDateString();
  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  document.querySelector(".hour").innerHTML = hour;
  document.querySelector(".minute").innerHTML = minute;
  document.querySelector(".second").innerHTML = second;
  document.querySelector(".date p").innerHTML = dateOfDay;
}

function hideLoading() {
  document.querySelector(".loading").style.display = "none";
}

window.onload = function () {
  let interval = setInterval(clock, 1000);
  setTimeout(hideLoading, 1000);
};
