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
  //make same for option 2 id from cardschosedis[1
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("you have clicked same images");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("Paiyen pudchitan ,ellam technology");
    //make the chosen card into white.png image
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    //remove event listener for cards chosen
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    console.log(cardsWon);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Kaipulla You can do it uuuh");
  }
  resultDisplay.textContent = cardsWon.length;

  cardsChosen = [];
  cardsChosenIds = [];
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
