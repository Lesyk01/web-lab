const card = ['🇫🇲', '🇷🇼', '🇲🇶', '🇺🇸', '🇰🇼', '🇫🇴', '🇱🇺', '🇲🇼', '🇾🇪 ','🇯🇵','🇧🇷','🇵🇱',];

let cards = [...card, ...card];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

cards = shuffle(cards);

let flippedCards = [];
let matchedCards = [];

function createCardElement(value) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.dataset.value = value;
    cardDiv.innerHTML = 'Card';
    return cardDiv;
}

function setupBoard() {
    const gameBoard = document.getElementById('board');
    gameBoard.innerHTML = '';
    cards.forEach(value => {
        const card = createCardElement(value);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length === 2 || this.classList.contains('flipped')) {
        return;
    }

    this.classList.add('flipped');
    this.innerHTML = this.dataset.value;
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}


function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (matchedCards.length === cards.length) {
            setTimeout(() => {
                alert('Congratulations! You matched all cards!');
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.innerHTML = 'Card';
            card2.innerHTML = 'Card';
            flippedCards = [];
        }, 1000);
    }
}

function restartGame() {
    flippedCards = [];
    matchedCards = [];
    cards = shuffle([...card, ...card]);
    setupBoard();
}

document.getElementById('restart').addEventListener('click', restartGame);

setupBoard();
