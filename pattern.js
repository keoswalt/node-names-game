// Elements ***********************************************************

const patternButtonP = document.getElementById("patternButtonP");
const patternButtonY = document.getElementById("patternButtonY");

const patternCardP1 = document.getElementById("patternCardP1");
const patternCardP2 = document.getElementById("patternCardP2");
const patternCardP3 = document.getElementById("patternCardP3");
const patternCardP4 = document.getElementById("patternCardP4");
const patternCardP5 = document.getElementById("patternCardP5");
const patternCardP6 = document.getElementById("patternCardP6");
const patternCardP7 = document.getElementById("patternCardP7");
const patternCardP8 = document.getElementById("patternCardP8");
const patternCardP9 = document.getElementById("patternCardP9");
const patternCardP10 = document.getElementById("patternCardP10");
const patternCardP11 = document.getElementById("patternCardP11");
const patternCardP12 = document.getElementById("patternCardP12");
const patternCardP13 = document.getElementById("patternCardP13");
const patternCardP14 = document.getElementById("patternCardP14");
const patternCardP15 = document.getElementById("patternCardP15");
const patternCardP16 = document.getElementById("patternCardP16");

const patternCardsP = [patternCardP1, patternCardP2, patternCardP3, patternCardP4, patternCardP5, patternCardP6, patternCardP7, patternCardP8, patternCardP9, patternCardP10, patternCardP11, patternCardP12, patternCardP13, patternCardP14, patternCardP15, patternCardP16];

// const patternCardY1 = document.getElementById("patternCardY1");
// const patternCardY2 = document.getElementById("patternCardY2");
// const patternCardY3 = document.getElementById("patternCardY3");
// const patternCardY4 = document.getElementById("patternCardY4");
// const patternCardY5 = document.getElementById("patternCardY5");
// const patternCardY6 = document.getElementById("patternCardY6");
// const patternCardY7 = document.getElementById("patternCardY7");
// const patternCardY8 = document.getElementById("patternCardY8");
// const patternCardY9 = document.getElementById("patternCardY9");
// const patternCardY10 = document.getElementById("patternCardY10");
// const patternCardY11 = document.getElementById("patternCardY11");
// const patternCardY12 = document.getElementById("patternCardY12");
// const patternCardY13 = document.getElementById("patternCardY13");
// const patternCardY14 = document.getElementById("patternCardY14");
// const patternCardY15 = document.getElementById("patternCardY15");
// const patternCardY16 = document.getElementById("patternCardY16");

// const patternCardsY = [patternCardY1, patternCardY2, patternCardY3, patternCardY4, patternCardY5, patternCardY6, patternCardY7, patternCardY8, patternCardY9, patternCardY10, patternCardY11, patternCardY12, patternCardY13, patternCardY14, patternCardY15, patternCardY16];

// Shuffle (Pink) *****************************************************************

const randomizerPattern = function () {
  return Math.floor(Math.random() * 16);
};

const shufflePatternP = function () {
  const randomNumbers = [];
  while (randomNumbers.length < 6) {
    const n = randomizerPattern();
    if (!randomNumbers.includes(n)) {
      randomNumbers.push(n);
    }
  };
  for (let i = 0; i < randomNumbers.length; i++) {
    let num = randomNumbers[i];
    patternCardsP[num].style.backgroundColor = "var(--color-pink)";
  }
};

shufflePatternP();

// Shuffle (Yellow) *****************************************************************

// const shufflePatternY = function () {
//   const randomNumbers = [];
//   while (randomNumbers.length < 6) {
//     const n = randomizerPattern();
//     if (!randomNumbers.includes(n)) {
//       randomNumbers.push(n);
//     }
//   };
//   for (let i = 0; i < randomNumbers.length; i++) {
//     let num = randomNumbers[i];
//     patternCardsY[num].style.backgroundColor = "var(--color-pink)";
//   }
// };

// shufflePatternY();

// Color Changes *****************************************************************

const turnPatternBlack = function(card) {
  card.style.backgroundColor = "var(--color-black-100)";
};

const turnPatternPink = function(card) {
  card.style.backgroundColor = "var(--color-pink)";
};

const turnPatternYellow = function(card) {
  card.style.backgroundColor = "var(--color-yellow)";
};

// Shuffle Buttons

const resetPatternCards = function(array) {
    for(let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "var(--color-white-100)";
    };
};

const resetButtonActionP = function() {
    resetPatternCards(patternCardsP);
    shufflePatternP();
};

patternButtonP.addEventListener("click", resetButtonActionP);

// const resetButtonActionY = function() {
//     resetPatternCards(patternCardsY);
//     shufflePatternY();
// };

// patternButtonY.addEventListener("click", resetButtonActionY);




// Pattern Card Interactions ********************************************

const turnPinkListener = function () {
    for (let i = 0; i < patternCardsP.length; i++) {
      patternCardsP[i].addEventListener("click", (event) =>
        turnPink(event.target)
      );
    }
  };

  const turnYellowListener = function () {
    for (let i = 0; i < patternCardsP.length; i++) {
      patternCardsP[i].addEventListener("click", (event) =>
        turnYellow(event.target)
      );
    }
  };

const turnBlack = function(target) {
    turnPatternBlack(target);
    target.removeEventListener("click", turnBlack);
    turnPinkListener();
};

const turnPink = function (target) {
  if (target.style.backgroundColor == "var(--color-black-100)") {
    turnPatternPink(target);
    target.removeEventListener("click", turnPink);
    turnBlackListener();
  }
};

const turnYellow = function (target) {
  if (target.style.backgroundColor == "var(--color-black-100)") {
    turnPatternYellow(target);
    target.removeEventListener("click", turnYellow);
    turnBlackListener();
  }
};

const turnBlackListener = function () {
  for (let i = 0; i < patternCardsP.length; i++) {
    if (patternCardsP[i].style.backgroundColor == "var(--color-pink)") {
      patternCardsP[i].addEventListener("click", (event) =>
        turnBlack(event.target)
      );
    }
  }
};

turnBlackListener();