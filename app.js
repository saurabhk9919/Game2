let userscore = 0;
let compscore = 0;
const options = document.querySelectorAll('.option');

const computeroption = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return choices[randomIdx];
}

function displayMessage(message, color) {
    const msgContainer = document.getElementById('msg');
    msgContainer.innerText = message;
    msgContainer.style.backgroundColor = color;
}

const winner = (userWin, useroption, compOpt) => {
    if (userWin) {
        userscore++;
        displayMessage(`You win! Computer chose ${compOpt}`, 'green');
        document.getElementById('user-score').innerHTML = userscore;
    } else if (userWin === false) {
        compscore++;
        displayMessage(`Computer wins! Computer chose ${compOpt}`, 'red');
        document.getElementById('computer-score').innerHTML = compscore;
    }
}

const playgame = (useroption) => {
    console.log("User choice =", useroption);
    const compOpt = computeroption();
    console.log("Computer choice =", compOpt);

    if (useroption === compOpt) {
        console.log("It's a tie!");
        displayMessage(`It's a tie! Computer chose ${compOpt}`, 'yellow');
        return;
    }

    let userWin = false;
    if (useroption === 'rock') {
        if (compOpt === 'scissors') userWin = true;
        else if (compOpt === 'paper') userWin = false;
    } else if (useroption === 'paper') {
        if (compOpt === 'rock') userWin = true;
        else if (compOpt === 'scissors') userWin = false;
    } else if (useroption === 'scissors') {
        if (compOpt === 'paper') userWin = true;
        else if (compOpt === 'rock') userWin = false;
    }

    winner(userWin, useroption, compOpt);
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const useroption = option.getAttribute('id');
        console.log('User clicked', useroption);
        playgame(useroption);
    });
});
