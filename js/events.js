import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
} from "./elements.js";

export default ({ controls, timer, sound }) => {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countdown();
    sound.buttonPressAudio.play();
  });

  buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.pauseTimer();
    sound.buttonPressAudio.play();
  });

  buttonStop.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.buttonPressAudio.play();
  });

  buttonSoundOff.addEventListener("click", () => {
    buttonSoundOn.classList.remove("hide");
    buttonSoundOff.classList.add("hide");
    sound.bgAudio.play();
  });

  buttonSoundOn.addEventListener("click", () => {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
    sound.bgAudio.pause();
  });

  buttonSet.addEventListener("click", () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}
