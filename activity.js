'use strict';

const buttonShuffle = document.querySelector('.button-shaffle');
const buttonSit = document.querySelector('.sit');

buttonSit.addEventListener('click', getCard());
buttonShuffle.addEventListener('click', generateColoda());

async function generateColoda() {
  const status = document.querySelector('.status');
  const deck_id = document.querySelector('.deck_id');

  const response = await fetch(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 '
  );
  const data = await response.json();
  if (data.shuffled) {
    deck_id.innerHTML = `ID колоды: ${data.deck_id}`;
    status.style.color = 'green';
    status.innerHTML = 'Колода перемешана';
  } else {
    status.style.color = 'red';
    status.innerHTML = 'Колода не перемешана';
  }

  buttonShuffle.style.display = 'none';
  buttonSit.style.display = 'block';

  return data;
}

async function getCard() {
  const buttonSit = document.querySelector('.sit');
  const board = document.querySelector('.board');

  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
  );
  const { cards } = await response.json();
  console.log(cards);
  buttonSit.addEventListener('click', () => {
    buttonSit.style.display = 'none';

    let placeHTML = ``;

    cards.forEach((card) => {
      placeHTML += `<img src="${card.image}" alt="${card.code}">`;
    });
    board.innerHTML = `<div class="place">${placeHTML}<p class="value"></p></div>`;
  });
}

function changeValue(card) {
  switch (card) {
    case 'JACK':
      return 10;
    case 'QUEEN':
      return 10;
    case 'KING':
      return 10;
    case 'ACE':
      return 11;
    default:
      return card;
  }
}
