//Creating cards which is linked to the png images of ppl

const cardArray = [
  {
    name: "praveen",
    img: "images/praveen.png",
  },
  // create 5 more cards for aswath,rudresh,yadu,kamalesh,kamala take img from images folder
  {
    name: "aswath",
    img: "images/aswath.png",
  },
  {
    name: "rudresh",
    img: "images/rudresh.png",
  },
  {
    name: "yadu",
    img: "images/yadu.png",
  },
  {
    name: "kamalesh",
    img: "images/kamlesh.png",
  },
  {
    name: "kamala",
    img: "images/kamala.png",
  },
  {
    name: "praveen",
    img: "images/praveen.png",
  },
  // create 5 more cards for aswath,rudresh,yadu,kamalesh,kamala take img from images folder
  {
    name: "aswath",
    img: "images/aswath.png",
  },
  {
    name: "rudresh",
    img: "images/rudresh.png",
  },
  {
    name: "yadu",
    img: "images/yadu.png",
  },
  {
    name: "kamalesh",
    img: "images/kamlesh.png",
  },
  {
    name: "kamala",
    img: "images/kamala.png",
  },
];
let cardsChosen = [];
let cardsChosenIds = [];
let cardsChosenNames = [];
const cardsWon = [];

cardArray.sort(() => 0.5 - Math.random());
const resultDisplay = document.querySelector("#result");

const gridDisplay = document.querySelector("#grid");
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
console.log(cardArray);
createBoard();
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  const optionOneImage = cards[optionOneId].getAttribute("src");
  const optionTwoImage = cards[optionTwoId].getAttribute("src");

  if (optionOneId === optionTwoId) {
    alert("you have clicked same images");
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("Paiyen pudchitan ,ellam technology");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Kaipulla You can do it uuuh");
  }

  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Jaichita da Maara";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
