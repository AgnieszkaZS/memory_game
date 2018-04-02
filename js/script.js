function init() {
    const cardsList = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'];


    let openTile = []; //wymieszane karty
    let movesCounter = 0; //liczba ruchów
    let tilesMatched = []; //zaznaczone klocki
    let time;
    let stars;
    let numTiles = 16;
    let pairs = 0;
    let canClick = true;

    let gameOver = document.querySelector('.result');


    //start game
    //remove board
    let startGame = function () {
        this.openTile.length = 0;
        this.movesCounter = 0;
        this.clicks = 0;
        this.tilesMatched = 0;
        this.time;
        this.pairs = 0;
        this.stars = document.querySelector('.stars').childElementCount;
        document.querySelector('.moves').textContent = 0;
        clearInterval(time);
        document.querySelector('.time').textContent = 0;

    }



    let startButton = document.getElementsByClassName('.button-start');
    button.onclock = startGame;

    let click = function (event) {
        if (canClick) {
            if (this.tilesMatched[0] || (this.tilesMatched[0].dataset.index !== event.target.dataset.index)) {
                this.tilesMatched.push(event.target);
            }
            if (this.tilesMatched.length === 2) {
                canClick = false;
                if (this.tilesMatched[0].dataset.typeTile === this.tilesMatched[1].dataset.typeTile) {
                    setTimeout(removeTiles.bind(this), 800);
                } else {
                    setTimeout(resetTiles.bind(this), 800);
                }
                movesCounter++;

                let result_moves = document.getElementsByClassName(.
                    'result-moves');
                results_moves.innerHTML = movesCounter;
            }
        }
    }

    //add cards    
    for (let i = 0; i < 8; i++) {
        let randomTile = floor(random(cardsList.length));
        let card = cardsList[randomTile];

        openTile.push(card); //add two copies to new table
        openTile.push(card);
    }
    cardsList.splice(randomTile, 1);

    // Shuffle function from http://stackoverflow.com/a/2450976
    let shuffleArray = function shuffle(array) {
        let currentIndex = array.length,
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

    shuffleArray(openTile);


    //timer    
    function time(start) {
        timer = setInterval(function () {
            timeNow = Date.now();
            passedTime = Math.floor((timeNow - start) / 1000);
            document.querySelector('.time').textContent = passedTime;
        }, 1000);
    }


    //moves counter
    function countMoves() {
        movesCounter += 1;
        let move = 8;
        let movesPanel = document.querySelector('.moves');
        if (movesCounter > 1) {
            movesPanel.textContent = 'Moves';
        } else {
            movesPanel.textContent = 'Move';
        }
    }

    //reset function
    let restartButton = document.getElementsByClassName('.fa fa-repeat');
    button.onclock = resetTiles {
        tilesMatched = [];
        canClick = true;
    }

    //delete tiles
    let deleteTiles = function () {
        tilesMatched[0].remove();
        tilesMatched[1].remove();

        canClick = true;
        tilesMatched[];

        this.pairs++;
        if (this.pairs >= this.numTiles / 2) {
            alert(gameOver);
        }
    }


    document.querySelector('.button-start').addEventListener('click', startGame);
}
window.onload=init;
