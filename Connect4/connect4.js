var gameOver = false;
var currentPlayer = 3;
var gameBoard = [];
var playerColor = [];
playerColor[1] = "red";
playerColor[2] = "blue"

function startGame() {
    gameOver = true

    for (let r = 0; r <= 5; r++) {
        gameBoard[r] = [];
        for (let c = 0; c <= 6; c++) {
            gameBoard[r][c] = 0
        }
    }
    createBoard();
    currentPlayer = 1;
    setUpTurn();
}

function createBoard() {
    checkWinner();
    for (let c = 0; c <= 6; c++) {
        for (let r = 0; r <= 5; r++) {
            document.getElementById('square_'+r+'_'+c).innerHTML ="<span class='piece player"+gameBoard[r][c]+"'> </span>";
        }
    }
}


function setUpTurn() {
    if (gameOver == true) {
        let element = document.getElementById('game_info');
        let dropClass = document.querySelectorAll("td > button");

        document.getElementById('game_info').innerHTML = "Best of luck and may the best player win!";
        if (currentPlayer == 1) {
            element.classList.add("player1Text");
            element.classList.remove("player2Text");
            for(let i = 0; i < dropClass.length; i++) {
                dropClass[i].classList.add("player1Turn");
                dropClass[i].classList.remove("player2Turn");
            }
        } else {
            element.classList.add("player2Text");
            element.classList.remove("player1Text");
            for(let i = 0; i < dropClass.length; i++) {
                dropClass[i].classList.add("player2Turn");
                dropClass[i].classList.remove("player1Turn");
            }



            // dropClass.classList.remove("player1Turn");
        }
    }
}

function dropToken(c) {
    if (gameOver == true){
        for (let r = 5; r >= 0; r --) {
            if(gameBoard[r][c] == 0) {
                gameBoard[r][c] = currentPlayer;
                createBoard();
                currentPlayer = (currentPlayer == 1) ? 2 : 1
                setUpTurn()
                return true
            }
        }
    }
}

// checkForWin
function checkWinner() {
    let i = currentPlayer
        for (let c = 0; c <= 3; c++ ) {
            for (let r = 0; r <= 5; r++) {
                if (gameBoard[r][c] == i) {
                    if((gameBoard[r][c+1] == i) && (gameBoard[r][c+2] == i) && (gameBoard[r][c+3] == i )) {
                    winnerFound(i);
                    return true;
                    }
                }
            }
        }
    	for (c = 0; c <=6; c++) {
    		for (r = 0; r <=2; r++) {
    			if (gameBoard[r][c] == i) {
    				if ((gameBoard[r+1][c] == i) && (gameBoard[r+2][c] == i) && (gameBoard[r+3][c] == i)) {
    					winnerFound(i);
    					return true;
    				}
    			}
    		}
    	}
        for (let c = 0; c <= 3; c++ ) {
            for (let r = 0; r <= 2; r++) {
                if (gameBoard[r][c] == i) {
                    if((gameBoard[r+1][c+1] == i) && (gameBoard[r+2][c+2] == i) && (gameBoard[r+3][c+3] == i )) {
                    winnerFound(i);
                    return true;
                    }
                }
            }
        }
        for (let c = 0; c <= 3; c++ ) {
            for (let r = 3; r <= 5; r++) {
                if (gameBoard[r][c] == i) {
                    if((gameBoard[r-1][c+1] == i) && (gameBoard[r-2][c+2] == i) && (gameBoard[r-3][c+3] == i )) {
                    winnerFound(i);
                    return true;
                    }
                }
            }
        }
}

// endGame
function winnerFound(winner) {
        gameOver = false;
        document.getElementById('game_info').innerHTML = "Winner: Player " + winner;
}

startGame()
