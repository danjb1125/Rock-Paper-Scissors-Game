const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissor-button');

const playerMoveBox = document.querySelector('.player-move-box');
const computerMoveBox = document.querySelector('.computer-move-box');

function game(playerMove, computerMove){
    checkWinner(playerMove, computerMove);
}

function getComputerMove(){
    const moves = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}

function clearMoveBoxes(){
    playerMoveBox.innerHTML = '';
    playerMoveBox.style.backgroundColor = ''; 

    computerMoveBox.innerHTML = ''; 
    computerMoveBox.style.backgroundColor = ''; 
}

function checkWinner(playerMove, computerMove){
    setTimeout(() => {
        if (playerMove == 'Rock' && computerMove === 'Scissors') {
            alert('Player Wins!');
            clearMoveBoxes();
        } 
        else if (playerMove == 'Paper' && computerMove === 'Rock') {
            alert('Player Wins!');
            clearMoveBoxes();
        } 
        else if (playerMove == 'Scissors' && computerMove === 'Paper') {
            alert('Player Wins!');
            clearMoveBoxes();
        } 
        else if(playerMove == computerMove){
            alert("It's a Draw!");
            clearMoveBoxes();
        }
        else {
            alert('Computer Wins!');
            clearMoveBoxes();
        }
    }, 100);
}

function displayPlayerMove(move, color){
    playerMoveBox.innerHTML = '';
    playerMoveBox.style.backgroundColor = color;
    const image = document.createElement('img');
    image.src = `images/${move}.svg`;
    image.style.width = '100%';
    image.style.height = '100%';
    playerMoveBox.appendChild(image);
}

function displayComputerMove(move, color){
    computerMoveBox.innerHTML = '';
    computerMoveBox.style.backgroundColor = color;
    const image = document.createElement('img');
    image.src = `images/${move}.svg`;
    image.style.width = '100%';
    image.style.height = '100%';
    computerMoveBox.appendChild(image);
}

function getBackgroundColor(move){
    if(move == 'Rock'){
        return getComputedStyle(rockButton).backgroundColor;
    }
    else if(move == 'Paper'){
        return getComputedStyle(paperButton).backgroundColor;
    }
    else{
        return getComputedStyle(scissorsButton).backgroundColor;
    }
}

rockButton.addEventListener('click', function(){
    let bgColor = getBackgroundColor('Rock');
    displayPlayerMove('Rock', bgColor);

    const computerMove = getComputerMove();
    bgColor = getBackgroundColor(computerMove);
    displayComputerMove(computerMove, bgColor);

    game('Rock', computerMove);
});

paperButton.addEventListener('click', function(){
    let bgColor = getBackgroundColor('Paper');
    displayPlayerMove('Paper', bgColor);

    const computerMove = getComputerMove();
    bgColor = getBackgroundColor(computerMove);
    displayComputerMove(computerMove, bgColor);

    game('Paper', computerMove);
});

scissorsButton.addEventListener('click', function(){
    let bgColor = getBackgroundColor('Scissors');
    displayPlayerMove('Scissors', bgColor);

    const computerMove = getComputerMove();
    bgColor = getBackgroundColor(computerMove);
    displayComputerMove(computerMove, bgColor);

    game('Scissors', computerMove);
});
