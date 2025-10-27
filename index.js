// Get elements
let Out_el = document.getElementById("text");
let Inp_el = document.getElementById("input");
let Time_el = document.getElementById("time1");
let Wpm_el = document.getElementById("time2");
let speed = document.getElementById("time3");

let seconds = 0;
let millis = 0;
let timer = null;
let startTime = null;
let h, s;

// Sample texts
const texts = [
  "Practice makes perfect.",
  "Typing fast requires accuracy first.",
  "JavaScript is fun to learn.",
  "Coding improves problem solving.",
  "Never stop learning new skills.",
];

// Show random text
function Text() {
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  Out_el.innerText = randomText;
  Inp_el.value = " ";
  resetTimer();
}

// Stopwatch function
function stopwatch() {
  millis++;

  if (millis >= 100) {
    millis = 0;
    seconds++;
  }
  if (millis < 10) {
    h = "0" + millis;
  } else {
    h = millis;
  }
  if (seconds < 10) {
    s = "0" + seconds;
  } else {
    s = seconds;
  }
  Time_el.innerHTML = s;
  Wpm_el.innerHTML = h;
}

// Start timer
function Timer() {
  timer = setInterval(stopwatch, 10);
}
// Stop timer
function stopTimer() {
  clearInterval(timer);
}

// Handle typing
Inp_el.addEventListener("input", () => {
  if (!startTime) {
    startTime = new Date();
    Timer();
  }
  if (Inp_el.value.trim() === Out_el.innerText) {
    stopTimer();
    WPM();
  }
});

// Calculate Words Per Minute
function WPM() {
  const Minutes = (seconds + millis / 100) / 60;
  const wordCount = Out_el.innerText.split(" ").length;
  const wpm = Math.round(wordCount / Minutes);
  speed.innerHTML = wpm;
}

// Button: New Text
function next() {
  Text();
}

// Button: Reset All
function reset() {
  stopTimer();
  Out_el.innerHTML = " ";
  Inp_el.value = "";
  seconds = 0;
  millis = 0;
  Time_el.innerHTML = "00";
  Wpm_el.innerHTML = "00";
  speed.innerHTML = "00";
  startTime = null;
}
