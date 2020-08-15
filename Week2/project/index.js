
// storing as variables
const decreaseButton = document.getElementById("Change-Session-Length").firstElementChild;
const sessionLength = decreaseButton.nextElementSibling;
const increaseButton = sessionLength.nextElementSibling;
const session = document.getElementById("session").lastElementChild;
// session.textContent = sessionLength.textContent;
const playAndResetButton = document.getElementById("session-control").firstElementChild;
const pauseButton = playAndResetButton.nextElementSibling;

// Increase session length function.
const increaseSession = () => {
  sessionLength.textContent = parseFloat(sessionLength.textContent) + 1;
  session.textContent = sessionLength.textContent;
  timer = session.textContent * 60;
 if (sessionLength.textContent == 2) {
  decreaseButton.disabled = false;
} 
}
// decrease session length function.
const decreaseSession = () => {
  sessionLength.textContent = parseFloat(sessionLength.textContent) - 1;
  session.textContent = sessionLength.textContent;
  timer = session.textContent * 60;
  if (sessionLength.textContent == 1) {
    decreaseButton.disabled = true;
    
  }
}

// decrease the session (timer)second every second.
let timer = session.textContent * 60;
const countItDown = () => {

  minute = Math.floor(timer / 60);
  seconds = timer % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  session.textContent = `${minute}:${seconds}`;
  timer--

  if (session.textContent === "0:00") {
    decreaseButton.disabled = false;
    increaseButton.disabled = false;
    session.textContent = "Time's up!";
    window.clearInterval(countItDownId);
  }
}


let countItDownId;
let condition;
const playAndReset = () => {
  condition = !condition;
  if (!condition) {
    window.clearInterval(countItDownId);
    playAndResetButton.classList.add("play");
    playAndResetButton.classList.remove("stop");
    decreaseButton.disabled = false;
    increaseButton.disabled = false;
    session.textContent = sessionLength.textContent;
    timer = session.textContent * 60;
  } else if (session.textContent !== "Time's up!") {
    session.textContent = sessionLength.textContent;
    timer = session.textContent * 60;
    countItDownId = window.setInterval(countItDown, 1000);
    playAndResetButton.classList.add("stop");
    playAndResetButton.classList.remove("play");
    decreaseButton.disabled = true;
    increaseButton.disabled = true;

  }
}

const pauseSession = () => {
  condition = !condition
  if (!condition) {

    window.clearInterval(countItDownId);
    pauseButton.classList.add("pause");
    pauseButton.classList.remove("play");
  } else if (session.textContent !== "Time's up!") {

    countItDownId = window.setInterval(countItDown, 1000);
    pauseButton.classList.add("play");
    pauseButton.classList.remove("pause");
    decreaseButton.disabled = true;
    increaseButton.disabled = true;
  }
}

// Events
let decrease = decreaseButton.addEventListener("click", decreaseSession);
let increase = increaseButton.addEventListener("click", increaseSession);
playAndResetButton.addEventListener("click", playAndReset);
pauseButton.addEventListener("click", pauseSession);


