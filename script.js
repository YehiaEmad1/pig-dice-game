"strict mode";
let roll = document.querySelector(".roll");
let diceImg = document.querySelector(".dice-img");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let hold = document.querySelector(".hold");
let newGame = document.querySelector(".new-game");
let score1 = 0;
let score2 = 0;
let currScore = 0;

roll.addEventListener("click", function () {
  let random = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove("hidden");
  diceImg.src = `dice-${random}.png`;
  if (player1.classList.contains("active")) {
    if (random !== 1) {
      currScore += random;
      document.querySelector(".current-score1").textContent = currScore;
    } else {
      player1.classList.remove("active");
      player2.classList.add("active");
      currScore = 0;
      document.querySelector(".current-score1").textContent = 0;
    }
  } else {
    if (random !== 1) {
      currScore += random;
      document.querySelector(".current-score2").textContent = currScore;
    } else {
      player2.classList.remove("active");
      player1.classList.add("active");
      currScore = 0;
      document.querySelector(".current-score2").textContent = 0;
    }
  }
});
hold.addEventListener("click", function () {
  if (player1.classList.contains("active")) {
    score1 += currScore;
    document.querySelector(".score1").textContent = score1;
    document.querySelector(".current-score1").textContent = 0;
    player1.classList.remove("active");
    player2.classList.add("active");
    currScore = 0;
  } else {
    score2 += currScore;
    document.querySelector(".score2").textContent = score2;
    document.querySelector(".current-score2").textContent = 0;
    player2.classList.remove("active");
    player1.classList.add("active");
    currScore = 0;
  }
  if (score1 >= 100) {
    document.querySelector(".score1").textContent = `player 1 wins`;
    diceImg.classList.add("hidden");
    roll.style.display = "none";
    hold.style.display = "none";
  } else if (score2 >= 100) {
    document.querySelector(".score2").textContent = `player 2 wins`;
    diceImg.classList.add("hidden");
    roll.style.display = "none";
    hold.style.display = "none";
  }
});
newGame.addEventListener("click", function () {
  score1 = 0;
  score2 = 0;
  currScore = 0;
  document.querySelector(".score1").textContent = 0;
  document.querySelector(".current-score1").textContent = 0;
  document.querySelector(".score2").textContent = 0;
  document.querySelector(".current-score2").textContent = 0;
  diceImg.classList.add("hidden");
  roll.style.display = "block";
  hold.style.display = "block";
});
