const l = console.log;


const decreaseButton = document.getElementById("Change-Session-Length").firstElementChild;
let sessionLength = decreaseButton.nextElementSibling;
const increaseButton = sessionLength.nextElementSibling;
// -------
let session = document.getElementById("session").lastElementChild;
session.textContent = sessionLength.textContent;


// -------

let playAndResetButton = document.getElementById("session-control").firstElementChild;
let pauseButton = playAndResetButton.nextElementSibling;

// Increase session length function.
const increaseSession = () => {
  sessionLength.textContent = parseFloat(sessionLength.textContent) + 1;
  session.textContent = sessionLength.textContent;
  timer = session.textContent * 60;
}
// decrease session length function.
const decreaseSession = () => {
  sessionLength.textContent = parseFloat(sessionLength.textContent) - 1;
  session.textContent = sessionLength.textContent;
  timer = session.textContent * 60;
  if (sessionLength.textContent == 1) {
    decreaseButton.disabled = true;

  }else if (sessionLength.textContent == 2 )   {
    decreaseButton.disabled = false;
    }
  
  
  

   

}
// decrease the session (timer)second every second.
let timer = session.textContent * 60;
const countItDown = () => {
  
  minute = Math.floor(timer / 60);
  seconds = timer % 60;
  seconds = seconds < 10 ? `0${seconds}`:seconds;
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
let flag;
const playAndReset = () => {
  flag = !flag;
  if (!flag) {
    window.clearInterval(countItDownId);
    playAndResetButton.classList.add("play");
    playAndResetButton.classList.remove("stop");
    decreaseButton.disabled = false;
    increaseButton.disabled = false;
    session.textContent = sessionLength.textContent;
    timer = session.textContent * 60;
  }else if (session.textContent !== "Time's up!") {
    countItDownId = window.setInterval(countItDown, 60);
    playAndResetButton.classList.add("stop");
    playAndResetButton.classList.remove("play");
    decreaseButton.disabled = true;
    increaseButton.disabled = true;

  }
}

const pauseSession = () => {
  flag = !flag
  if (!flag) {
    
    window.clearInterval(countItDownId);
    pauseButton.classList.add("pause");
    pauseButton.classList.remove("play");
  } else if (session.textContent !== "Time's up!"){
   
    countItDownId = window.setInterval(countItDown, 60);
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


