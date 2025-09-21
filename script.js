// ===== Nexus Token Rush Game =====
let score = 0;
let timeLeft = 30;
let timer;
let gameInterval;

const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const nexusLink = document.getElementById("nexusLink");

startBtn.addEventListener("click", startGame);

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = "Score: " + score;
  timerDisplay.textContent = "Time: " + timeLeft;
  nexusLink.style.display = "none";
  gameArea.innerHTML = "";

  startBtn.disabled = true;

  timer = setInterval(updateTimer, 1000);
  gameInterval = setInterval(spawnToken, 800);
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = "Time: " + timeLeft;

  if (timeLeft <= 0) {
    endGame();
  }
}

function spawnToken() {
  const token = document.createElement("img");
  token.src = "logo-nexus.png"; // logo Nexus
  token.classList.add("token");

  // posisi random
  const x = Math.random() * (gameArea.clientWidth - 40);
  const y = Math.random() * (gameArea.clientHeight - 40);
  token.style.left = x + "px";
  token.style.top = y + "px";

  token.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    token.remove();
  });

  gameArea.appendChild(token);

  // auto hilang setelah 2 detik
  setTimeout(() => token.remove(), 2000);
}

function endGame() {
  clearInterval(timer);
  clearInterval(gameInterval);
  startBtn.disabled = false;
  nexusLink.style.display = "inline-block";
}
