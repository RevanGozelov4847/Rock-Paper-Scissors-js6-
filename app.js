let roundCounter = 1;
let overallScore = 0;

function getRandomMove() {
    const moves = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function determineWinner(player1Move, player2Move) {
    const player1MoveLower = player1Move.toLowerCase();
    const player2MoveLower = player2Move.toLowerCase();

    if (player1MoveLower === player2MoveLower) {
        return "Draw";
    } else if (
        (player1MoveLower === "rock" && player2MoveLower === "scissors") ||
        (player1MoveLower === "paper" && player2MoveLower === "rock") ||
        (player1MoveLower === "scissors" && player2MoveLower === "paper")
    ) {
        return "Player 1";
    } else {
        return "Player 2";
    }
}


function displayWinner(winner) {
    const resultElement = document.getElementById("result");
    if (winner === "Draw") {
        resultElement.textContent = "It's a Draw!";
    } else {
        resultElement.textContent = `${winner === "Player 1" ? "You" : "Computer"} wins this round!`;
    }

    if (winner === "Player 1") {
        overallScore++;
    } else if (winner === "Player 2") {
        overallScore--;
    }
    document.getElementById("overallScore").textContent = overallScore;
}

function startRound() {
    const player1MoveElement = document.getElementById("player1Move");
    const player2MoveElement = document.getElementById("player2Move");

    document.getElementById("result").textContent = "";
    player1MoveElement.textContent = "";
    player2MoveElement.textContent = "";

    roundCounter++;
    document.getElementById("roundCounter").textContent = roundCounter;

    const userMove = prompt("Choose your move: Rock, Paper, or Scissors").toLowerCase();

    if (!userMove || !["rock", "paper", "scissors"].includes(userMove)) {
        alert("Invalid move or canceled. Please try again.");
        return;
    }

    const computerMove = getRandomMove();

    player1MoveElement.textContent = `You: ${userMove}`;
    player2MoveElement.textContent = `Computer: ${computerMove}`;

    const winner = determineWinner(userMove, computerMove);

    displayWinner(winner);
}

startRound();
