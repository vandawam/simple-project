let totalSeconds = 0;
let timeinterval;

function startTimer() {
    timeinterval = setInterval(setTime, 1000)
}

function setTime() {
    if (totalSeconds == 59999) {
        totalSeconds = 0;
    }
    ++totalSeconds;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('minute').innerText = padM(minutes);
    document.getElementById('second').innerText = padS(seconds);
  }

  function stopTimer() {
    clearInterval(timeinterval);
    timeinterval = null;
  }

  function resetTimer() {
    clearInterval(timeinterval);
    timeinterval = null;
    totalSeconds = 0;
    document.getElementById('minute').innerText = '000';
    document.getElementById('second').innerText = '00';
  }

  function padS(val) {
    const valString = val + '';
    return valString.length < 2 ? '0' + valString : valString;
  }

  function padM(val) {
    const valString = val + '';
    return valString.length < 3 ? '0'.repeat(3 - valString.length) + valString : valString;
  }
  