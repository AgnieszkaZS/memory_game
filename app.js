/*
 * Create a list that holds all of your cards
 */

let cardsList = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'];

let openTile = [],
    movesCounter = 0,
    clicks = 0,
    matched = 0,
    timer,
    stars;

const deck = document.querySelector('.deck');
result = document.querySelector('.result');

cardsList = cardsList.concat(cardsList); //double elements


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffleDeck() {
    shuffle(cardsList);
    let liDeck = deck.getElementsByTagName('li');
    for (let i = 0; i < liDeck.length; i++) {
        liDeck[i].querySelector('i').classList = 'fa ' + cardsList[i];
    }
}

function showCard(card) {
    card.classList.add('open', 'show');

}

//clear array
function hide(card1, card2) {
    open.length = 0;
    setTimeout(function () {
        card1.classList.remove('open', 'show');
        card2.classList.remove('open', 'show');
    }, 500);
}

//compare of two cards
function checkCards(firstCard) {
    if (open.length === 2)
        countMoves();
    let lastOpen = open[1];
    if (lastOpen.children[0].className === firstCard.children[0].className) {
        matchCard(firstCard, lastOpen);
    } else {
        hide(firstCard, lastOpen);

    }

}
}

//cards effect
function matchCard(card1, card2) {
    matched += 1;
    open.length = 0;
    setTimeout(function () {
        card1.classList.add('match', 'match-effect');
        card2.classList.add('match', 'match-effect');
        card1.classList.remove('open', 'show');
        card2.classList.remove('open', 'show');
        setTimeout(function () {
            card1.classList.remove('match-effect'); //glow for 1 sec
            card2.classList.remove('match-effect');
        }, 800)
        if (countMatched === 8) {
            gameCompleted();
        }
    }, 800);
}

//moves counter
function countMoves() {
    movesCounter += 1;
    let move = 8;
    const movesPanel = document.querySelector('.moves');
    if (movesCounter > 1) {
        movesPanel.textContent = 'Moves';
    } else {
        movesPanel.textContent = 'Move';
    }

    //timer    
    function time(start) {
        timer = setInterval(function () {
            timeNow = Date.now();
            passedTime = Math.floor((timeNow - start) / 1000);
            document.querySelector('.time').textContent = passedTime;
        }, 1000);
    }

    //reset functions and begin the game
    function reset() {
        openTile.length = 0
        movesCounter = 0,
            clicks = 0,
            matched = 0,
            timer,
            stars = document.querySelector('.stars').childElementCount;
        document.querySelector('.moves').textContent = 0;
        clearInterval(timer);
        document.querySelector('.time').textContent = 0;
        let newDeck = document.querySelector('.deck').children;
        for (let i = 0; i < newDeck.length; i++) {
            newDeck[i].classList.remove('open', 'show', 'match');
        }
        shuffleDeck();
    }
    shuffleDeck();

    deck.addEventListener('click', function (event) {
        let.target = event.target;
        if (!(target.classList.contains('match') || target.classList.contains('show')) && target.tagName === 'li') {
            open.unshift(target);
            clicks += 1;
            if (clicks === 1) {
                start = data.now();
                time(start);
            }
            showCard(target);
            checkCards(target;)
        }

    });

    document.querySelector('.restart').addEventListener('click', function () {
        reset()
    });



    /*
     * set up the event listener for a card. If a card is clicked:
     *  - display the card's symbol (put this functionality in another function that you call from this one)
     *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
     *  - if the list already has another card, check to see if the two cards match
     *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
     *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
     *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
     *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
     */
