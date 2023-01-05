import Sounds  from "./sounds.js";

export const Timer = ({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) => {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  const updateDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  };

  const reset = () => {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  };

  const countdown = () => {
    timerTimeOut = setTimeout( () => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        Sounds().kitchenTimer.play()
        resetControls();
        reset();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  };

  const updateMinutes = (newMinutes) => {
    minutes = newMinutes
  }

  const pauseTimer = () => {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    pauseTimer
  };
};
