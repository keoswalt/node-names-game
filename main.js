document.addEventListener('DOMContentLoaded', function() {

// DOM ELEMENTS *********************************************************

// Cards
let card1 = document.getElementById("card1");
let card1Top = document.getElementById("card1Top");
let card1Bot = document.getElementById("card1Bot");
let card2 = document.getElementById("card2");
let card2Top = document.getElementById("card2Top");
let card2Bot = document.getElementById("card2Bot");
let card3 = document.getElementById("card3");
let card3Top = document.getElementById("card3Top");
let card3Bot = document.getElementById("card3Bot");
let card4 = document.getElementById("card4");
let card4Top = document.getElementById("card4Top");
let card4Bot = document.getElementById("card4Bot");
let card5 = document.getElementById("card5");
let card5Top = document.getElementById("card5Top");
let card5Bot = document.getElementById("card5Bot");
let card6 = document.getElementById("card6");
let card6Top = document.getElementById("card6Top");
let card6Bot = document.getElementById("card6Bot");
let card7 = document.getElementById("card7");
let card7Top = document.getElementById("card7Top");
let card7Bot = document.getElementById("card7Bot");
let card8 = document.getElementById("card8");
let card8Top = document.getElementById("card8Top");
let card8Bot = document.getElementById("card8Bot");
let card9 = document.getElementById("card9");
let card9Top = document.getElementById("card9Top");
let card9Bot = document.getElementById("card9Bot");
let card10 = document.getElementById("card10");
let card10Top = document.getElementById("card10Top");
let card10Bot = document.getElementById("card10Bot");
let card11 = document.getElementById("card11");
let card11Top = document.getElementById("card11Top");
let card11Bot = document.getElementById("card11Bot");
let card12 = document.getElementById("card12");
let card12Top = document.getElementById("card12Top");
let card12Bot = document.getElementById("card12Bot");
let card13 = document.getElementById("card13");
let card13Top = document.getElementById("card13Top");
let card13Bot = document.getElementById("card13Bot");
let card14 = document.getElementById("card14");
let card14Top = document.getElementById("card14Top");
let card14Bot = document.getElementById("card14Bot");
let card15 = document.getElementById("card15");
let card15Top = document.getElementById("card15Top");
let card15Bot = document.getElementById("card15Bot");
let card16 = document.getElementById("card16");
let card16Top = document.getElementById("card16Top");
let card16Bot = document.getElementById("card16Bot");

// Player bars before game starts
let startButtonsTop = document.getElementById("startButtonsTop");
let startButtonsBot = document.getElementById("startButtonsBot");
// Buttons in start bars
const startPlayerTopBut = document.getElementById("startPlayerTopBut");
const startPlayerBotBut = document.getElementById("startPlayerBotBut");
const resetBoardTop = document.getElementById("resetBoardTop");
const resetBoardBot = document.getElementById("resetBoardBot");

// Player bars once game is started
let playerTopBar = document.getElementById("playerTopBar");
let playerBotBar = document.getElementById("playerBotBar");
// Progress bar dots
const progressDotsTop = document.getElementsByClassName("dotTop"); // returns an array of 5 dots
const progressDotsBot = document.getElementsByClassName("dotBot") // returns an array of 5 dots
// End turn buttons
let endPlayerTop = document.getElementById("endPlayerTop");
let endPlayerBot = document.getElementById("endPlayerBot");
// End game buttons
const endGameTop = document.getElementById("endGameTop");
const endGameBot = document.getElementById("endGameBot");

// Confirmation dialog
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const shadow = document.querySelector(".shadow");
const dialog = document.querySelector(".dialog");

// Game end screen button
const restart = document.getElementById("restart");

// VARIABLES *************************************************************

let player1;
let player2;
let playerTop;
let playerBot;
let turnsPlayerTop = 0;
let turnsPlayerBot = 0;

const cardWords = [
    'Rod',               'Reel',           'Tackle',
    'Lure',              'Stream',         'Trout',
    'Bass',              'Canoe',          'Kayak',
    'Campfire',          'Tent',           'Backpack',
    'Trail',             'Boots',          'Summit',
    'Wilderness',        'Map',            'Compass',
    'Hobbit',            'Elf',            'Dwarf',
    'Wizard',            'Orc',            'Gondor',
    'Mordor',            'Jedi',           'Sith',
    'Droid',             'Lightsaber',     'Galaxy',
    'Empire',            'Republic',       'Joy-Con',
    'Cartridge',         'Console',        'Multiplayer',
    'Quest',             'RPG',            'Platformer',
    'Emulator',          'LAN',            'GPU',
    'CPU',               'Monitor',        'Keyboard',
    'Mouse',             'Software',       'Code',
    'Program',           'Algorithm',      'Bug',
    'Debug',             'Compiler',       'Estate',
    'Mortgage',          'Broker',         'Lease',
    'Tenant',            'Facade',         'Blueprint',
    'Column',            'Beam',           'Arch',
    'Soil',              'Seed',           'Shovel',
    'Plant',             'Flower',         'Harvest',
    'Stove',             'Oven',           'Recipe',
    'Ingredient',        'Pan',            'Mixer',
    'Dough',             'Frosting',       'Novel',
    'Author',            'Genre',          'Library',
    'Bookshelf',         'Dragon',         'Castle',
    'Magic',             'Quest',          'Gnome',
    'Timeline',          'Budget',         'Objective',
    'Strategy',          'Deadline',       'Scope',
    'Stakeholder',       'Risks',          'Sprint',
    'Charter',           'Paddle',         'Waders',
    'Fly',               'Bait',           'Anchor',
    'RV',                'Sleeping Bag',   'Flashlight',
    'Carabiner',         'Rucksack',       'Canteen',
    'Ridge',             'Glade',          'Fellowship',
    'Ring',              'Ent',            'Saruman',
    'Ewok',              'Clone',          'Stormtrooper',
    'Cruiser',           'Force',          'Rebel',
    'Pro Controller',    'Indie',          'Shader',
    'AI',                'Save',           'Frame Rate',
    'Middleware',        'Hard Drive',     'RAM',
    'Binary',            'Cache',          'Cloud',
    'UI',                'UX',             'Patch',
    'Realtor',           'Appraisal',      'Zoning',
    'Duplex',            'Gable',          'Patio',
    'Villa',             'Skyscraper',     'Mezzanine',
    'Terrace',           'Hedge',          'Fertilizer',
    'Compost',           'Pot',            'Pruner',
    'Grill',             'Fillet',         'Sauté',
    'Simmer',            'Whisk',          'Knead',
    'Sourdough',         'Eclair',         'Paperback',
    'E-reader',          'Manuscript',     'Prologue',
    'Sorcerer',          'Lich',           'Grimoire',
    'Artifact',          'Covenant',       'Paladin',
    'Gantt Chart',       'Workflow',       'Deliverable',
    'Milestone',         'Optimization',   'Allocation',
    'Integration',       'Jig',            'Net',
    'Trolling',          'Hatchet',        'Flare',
    'Topography',        'Ranger',         'Precipice',
    'Smaug',             'Isengard',       'AT-AT',
    'Millennium Falcon', 'Haptic',         'Co-op',
    'Hitbox',            'ASIC',           'Firmware',
    'Kernel',            'Interface',      'Listings',
    'Curb Appeal',       'Dormer',         'Cornice',
    'Mulch',             'Spatula',        'Chip',
    'Hardware',          'Network',        'Database',
    'Drone',             'Encryption',     'Bandwidth',
    'Protocol',          'Itinerary',      'Passport',
    'Destination',       'Airline',        'Suitcase',
    'Kiwi',              'Hobbiton',       'Glacier',
    'Infrastructure',    'Commute',        'Metropolis',
    'Skyline',           'Microhome',      'Ecofootprint',
    'Minimalism',        'Prefab',         'Tinyhouse',
    'Kanban',            'Backlog',        'Standup',
    'Velocity',          'Roadmap',        'Launch',
    'Feature',           'Branding',       'Iteration',
    'Wireframe',         'Prototype',      'Palette',
    'Typography',        'Aesthetics',     'Mockup',
    'Function',          'Debugging',      'Array',
    'Syntax',            'Sprinkler',      'Hydrant',
    'Extinguisher',      'Smoke Detector', 'Alarm',
    'Flammability',      'Resilience',     'Engraving',
    'Etching',           'Focal Point',    'Precision',
    'Leathercraft',      'Tannin',         'Stitching',
    'Dye',               'Beveler',        'Tannery',
    'Burnishing',        'Innovation',     'App',
    'Cloud Computing',   'Robotics',       'Biometrics',
    'Ticket',            'Guidebook',      'Excursion',
    'Transit',           'Visa',           'Peak',
    'Rugby',             'Vineyard',       'Geothermal',
    'Subdivision',       'Gentrification', 'Streetcar',
    'Greenbelt',         'Scalability',    'Efficiency',
    'Workspace',         'Insulation',     'Grid',
    'Taco',              'Salsa',          'Pizza',
    'Cupcake',           'Icing',          'Macaroon',
    'Cinnamon Roll'
  ]

// RESET FUNCTION *********************************************************

const randomizer = function() {
    return Math.floor(Math.random() * 199);
  }

const shuffleCards = function() {
    const randomNumbers = [];
  while (randomNumbers.length < 16) {
    const n = randomizer();
    if (!randomNumbers.includes(n)) {
      randomNumbers.push(n);
    }
  };
  const cardContent = randomNumbers.map(index => cardWords[index]);
    return cardContent;
};
// Set innertext of HTML cards equal to each variable
const fillCardText = function(content) {
    card1Top.innerText = content[0];
    card2Top.innerText = content[1];
    card3Top.innerText = content[2];
    card4Top.innerText = content[3];
    card5Top.innerText = content[4];
    card6Top.innerText = content[5];
    card7Top.innerText = content[6];
    card8Top.innerText = content[7];
    card9Top.innerText = content[8];
    card10Top.innerText = content[9];
    card11Top.innerText = content[10];
    card12Top.innerText = content[11];
    card13Top.innerText = content[12];
    card14Top.innerText = content[13];
    card15Top.innerText = content[14];
    card16Top.innerText = content[15];
    card1Bot.innerText = content[0];
    card2Bot.innerText = content[1];
    card3Bot.innerText = content[2];
    card4Bot.innerText = content[3];
    card5Bot.innerText = content[4];
    card6Bot.innerText = content[5];
    card7Bot.innerText = content[6];
    card8Bot.innerText = content[7];
    card9Bot.innerText = content[8];
    card10Bot.innerText = content[9];
    card11Bot.innerText = content[10];
    card12Bot.innerText = content[11];
    card13Bot.innerText = content[12];
    card14Bot.innerText = content[13];
    card15Bot.innerText = content[14];
    card16Bot.innerText = content[15];
};

const resetBoard = function() {
    const cardContent = shuffleCards();
    fillCardText(cardContent);
  };

// END TURN ****************************************************************

// Listeners

const addTurn = function (player) {
    return player + 1;
  };
  
  const fillDotPast = function (direction, turn) {
    let target = direction[turn];
    target.style.background = "var(--color-dark-100)";
  };

  const fillDotCurrent = function (direction, turn) {
    let target = direction[turn];
    target.style.background = "var(--color-yellow)";
  };

  const invertDialog = function() {
    dialog.style.transform = "translate(-50%, -50%) rotate(180deg)";
  }

  const resetDialog = function() {
    dialog.style.transform = "translate(-50%, -50%)"
  }

  const startTurnTop = function() {
    let turn = turnsPlayerTop;
    fillDotCurrent(progressDotsTop, turn);
  }

  const startTurnBot = function() {
    let turn = turnsPlayerBot;
    fillDotCurrent(progressDotsBot, turn);
  }

const endTurnTop = function() {
    let turn = turnsPlayerTop;
    fillDotPast(progressDotsTop, turn);
    turnsPlayerTop = addTurn(turnsPlayerTop);
    resetDialog();
    startTurnBot();
};

const endTurnBot = function() {
    let turn = turnsPlayerBot;
    fillDotPast(progressDotsBot, turn);
    turnsPlayerBot = addTurn(turnsPlayerBot);
    invertDialog();
    startTurnTop();
};

endPlayerTop.addEventListener("click", endTurnTop);
endPlayerBot.addEventListener("click", endTurnBot);

// Set variable to count total turns

// CARD CLICK FUNCTIONS *********************************************

const openDialog = function() {
  shadow.style.display = "block";
  dialog.style.display = "flex";
};

const closeDialog = function() {
  shadow.style.display = "none";
  dialog.style.display = "none";
};


const rightAnswerTop = function (element) {
  const card = element.closest(".cardCover");
  if (card) {
    card.classList.add("cardCoverBlack");
  }
  closeDialog();
};


const wrongAnswerTop = function() {
    closeDialog();
};

  const rightAnswerBot = function (element) {
    const card = element.closest(".cardCover");
    if (card) {
      card.classList.add("cardCoverBlack");
    }
    closeDialog();
  };
  
  const wrongAnswerBot = function() {
      closeDialog();
  };

const cardClickTop = function(event) {
  let selected = event.target;
  openDialog();
  yesButton.addEventListener("click", () => rightAnswerTop(selected));
  noButton.addEventListener("click", () => wrongAnswerTop());
};

const cardClickBot = function(event) {
    let selected = event.target;
    openDialog();
    yesButton.addEventListener("click", () => rightAnswerBot(selected));
    noButton.addEventListener("click", () => wrongAnswerBot());
  };

// Listeners

const addClickListenerTop = function(element) {
    element.addEventListener("click", cardClickTop);
};

const addClickListenerBot = function(element) {
    element.addEventListener("click", cardClickBot);
};

const applyCardListenerTop = function() {
    addClickListenerTop(card1);
    addClickListenerTop(card2);
    addClickListenerTop(card3);
    addClickListenerTop(card4);
    addClickListenerTop(card5);
    addClickListenerTop(card6);
    addClickListenerTop(card7);
    addClickListenerTop(card8);
    addClickListenerTop(card9);
    addClickListenerTop(card10);
    addClickListenerTop(card11);
    addClickListenerTop(card12);
    addClickListenerTop(card13);
    addClickListenerTop(card14);
    addClickListenerTop(card15);
    addClickListenerTop(card16);
};

const applyCardListenerBot = function() {
    addClickListenerBot(card1);
    addClickListenerBot(card2);
    addClickListenerBot(card3);
    addClickListenerBot(card4);
    addClickListenerBot(card5);
    addClickListenerBot(card6);
    addClickListenerBot(card7);
    addClickListenerBot(card8);
    addClickListenerBot(card9);
    addClickListenerBot(card10);
    addClickListenerBot(card11);
    addClickListenerBot(card12);
    addClickListenerBot(card13);
    addClickListenerBot(card14);
    addClickListenerBot(card15);
    addClickListenerBot(card16);
};

// GAME START ********************************************************

const hideStartButtons = function() {
    startButtonsTop.style.display = "none";
    startButtonsBot.style.display = "none";
};

const showGameButtons = function() {
    playerTopBar.style.display = "flex";
    playerBotBar.style.display = "flex";
};

const startPlayerTop = function() {
    player1 = playerTop;
    hideStartButtons();
    showGameButtons();
    applyCardListenerTop();
};

const startPlayerBot = function() {
    player1 = playerBot;
    hideStartButtons();
    showGameButtons();
    applyCardListenerBot();
};

const addStartListeners = function() {
    startPlayerTopBut.addEventListener("click", startPlayerTop);
    startPlayerBotBut.addEventListener("click", startPlayerBot);
};

const startGame = function() {
    resetBoard();
    addStartListeners();
    resetBoardTop.addEventListener("click", resetBoard);
    resetBoardBot.addEventListener("click", resetBoard);
};

startGame();

});
