export default class Timer {
  constructor() {
    this.startButton = document.createElement("button");
    this.resetButton = document.createElement("button");
    this.showTimerElement = document.createElement("span");

    this.startButton.textContent = "Start";
    this.startButton.classList.add("timerJS-start");

    this.resetButton.textContent = "Reset";
    this.resetButton.classList.add("timerJS-reset");

    this.showTimerElement.textContent = "---";
    this.showTimerElement.classList.add("timerJS-time");

    this.launchTimer();
  }

  addTimer(htmlElement) {
    htmlElement.appendChild(this.startButton);
    htmlElement.appendChild(this.resetButton);
    htmlElement.appendChild(this.showTimerElement);
  }

  launchTimer() {
    let counterSec = 0;
    let counterMilisec = 0;

    let timer;

    function startTimer(placeTimer) {
      counterSec += 0.01;

      if (counterMilisec === 99) counterMilisec = 0;
      counterMilisec++;

      if (counterMilisec < 10) counterMilisec = "0" + counterMilisec;
      placeTimer.textContent = `${parseInt(counterSec)}.${counterMilisec}`;
    }

    this.startButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
        e.target.textContent = "Start";
        clearInterval(timer);
      } else {
        e.target.classList.add("active");
        e.target.textContent = "Stop";

        timer = setInterval(startTimer, 10, this.showTimerElement);
      }
    });

    this.resetButton.addEventListener("click", (e) => {
      this.showTimerElement.textContent = "---";
      this.startButton.classList.remove("active");
      clearInterval(timer);
      counterSec = 0;
      counterMilisec = 0;
    });
  }
}
