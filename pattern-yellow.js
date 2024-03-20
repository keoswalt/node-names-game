// Elements ***********************************************************
const patternButtonY = document.getElementById("patternButtonY");

const patternCardY1 = document.getElementById("patternCardY1");
const patternCardY2 = document.getElementById("patternCardY2");
const patternCardY3 = document.getElementById("patternCardY3");
const patternCardY4 = document.getElementById("patternCardY4");
const patternCardY5 = document.getElementById("patternCardY5");
const patternCardY6 = document.getElementById("patternCardY6");
const patternCardY7 = document.getElementById("patternCardY7");
const patternCardY8 = document.getElementById("patternCardY8");
const patternCardY9 = document.getElementById("patternCardY9");
const patternCardY10 = document.getElementById("patternCardY10");
const patternCardY11 = document.getElementById("patternCardY11");
const patternCardY12 = document.getElementById("patternCardY12");
const patternCardY13 = document.getElementById("patternCardY13");
const patternCardY14 = document.getElementById("patternCardY14");
const patternCardY15 = document.getElementById("patternCardY15");
const patternCardY16 = document.getElementById("patternCardY16");

const patternCardsY = [patternCardY1, patternCardY2, patternCardY3, patternCardY4, patternCardY5, patternCardY6, patternCardY7, patternCardY8, patternCardY9, patternCardY10, patternCardY11, patternCardY12, patternCardY13, patternCardY14, patternCardY15, patternCardY16];

// Shuffle (Yellow) *****************************************************************

const randomizerPattern = function () {
  return Math.floor(Math.random() * 16);
};

const shufflePatternY = function () {
  const randomNumbers = [];
  while (randomNumbers.length < 6) {
    const n = randomizerPattern();
    if (!randomNumbers.includes(n)) {
      randomNumbers.push(n);
    }
  };
  for (let i = 0; i < randomNumbers.length; i++) {
    let num = randomNumbers[i];
    patternCardsY[num].style.backgroundColor = "var(--color-yellow)";
  }
};

shufflePatternY();

// Color Changes *****************************************************************

const turnPatternBlack = function(card) {
  card.style.backgroundColor = "var(--color-black-100)";
};

const turnPatternYellow = function(card) {
  card.style.backgroundColor = "var(--color-yellow)";
};

// Pattern Card Interactions ********************************************

  const turnYellowListener = function () {
    for (let i = 0; i < patternCardsY.length; i++) {
      patternCardsY[i].addEventListener("click", (event) =>
        turnYellow(event.target)
      );
    }
  };

const turnBlack = function(target) {
    turnPatternBlack(target);
    target.removeEventListener("click", turnBlack);
    turnYellowListener();
};

const turnYellow = function (target) {
  if (target.style.backgroundColor == "var(--color-black-100)") {
    turnPatternYellow(target);
    target.removeEventListener("click", turnYellow);
    turnBlackListener();
  }
};

const turnBlackListener = function () {
  for (let i = 0; i < patternCardsY.length; i++) {
    if (patternCardsY[i].style.backgroundColor == "var(--color-yellow)") {
      patternCardsY[i].addEventListener("click", (event) =>
        turnBlack(event.target)
      );
    }
  }
};

turnBlackListener();

// Shuffle Buttons

const resetPatternCards = function(array) {
  for(let i = 0; i < array.length; i++) {
      array[i].style.backgroundColor = "var(--color-white-100)";
  };
};

const resetButtonActionY = function() {
    resetPatternCards(patternCardsY);
    shufflePatternY();
    turnBlackListener();
};

patternButtonY.addEventListener("click", resetButtonActionY);