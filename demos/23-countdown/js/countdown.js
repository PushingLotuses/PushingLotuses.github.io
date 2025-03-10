// alert("Hello world");

function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

  function formatCountdownText(days, hours, minutes, seconds, milliseconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms left`;
  }

let deadline = new Date ("December 24, 2025 09:00:00");

let countdown = document.getElementById("countdown");
countdown.innerHTML = "";

function setCountdown() {
    let now = new Date();

    let timeLeft = deadline.getTime() - now.getTime();

    let daysLeft = convertToDaysLeft(timeLeft);
    let hourLeft = convertToHoursLeft(timeLeft);
    let minutesLeft = convertToMinutesLeft(timeLeft);
    let secondsLeft = convertToSecondsLeft(timeLeft);

    countdown.innerHTML =
        formatCountdownText(daysLeft, hourLeft, minutesLeft, secondsLeft, timeLeft );
}
// setCountdown();

setInterval(setCountdown, 1);