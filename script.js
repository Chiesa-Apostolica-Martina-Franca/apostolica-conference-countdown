const EVENT_START = new Date("2027-05-29T00:00:00+02:00");

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const countdownElement = document.querySelector(".countdown");
const startedMessage = document.querySelector("#started-message");

function pad(value, length = 2) {
  return String(value).padStart(length, "0");
}

function updateCountdown() {
  const remaining = EVENT_START.getTime() - Date.now();

  if (remaining <= 0) {
    countdownElement.hidden = true;
    startedMessage.hidden = false;
    return;
  }

  const totalMinutes = Math.floor(remaining / 60_000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes / 60) % 24);
  const minutes = totalMinutes % 60;

  daysElement.textContent = pad(days, 3);
  hoursElement.textContent = pad(hours);
  minutesElement.textContent = pad(minutes);
}

updateCountdown();
setInterval(updateCountdown, 1_000);
