const prizeMax = 100;
const minRange = 0;
const maxAttempts = 3;
const maxRange = 8;
const addRange = 4;
const addPrize = 2;
const prizeDivider = 2;
let indexPrize = 1;
let indexRange = 0;
if (confirm('Do you want to play a game?')) { 
    let totalPrize = 0;
    let maxCurrentprize = prizeMax;
    let attempts = 0;
    let random = Math.floor(Math.random() * (maxRange + 1));
    while (attempts < maxAttempts) {
        let userNumber = prompt(`
Choose a roulette pocket number from 0 to ${maxRange + indexRange}
Attempts left: ${maxAttempts - attempts}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${maxCurrentprize}$ 
            `,'');
            if (userNumber !== null) {
                if (parseInt(userNumber) === random) {
                    totalPrize += maxCurrentprize;
                    if (confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`)) {
                        attempts = 0;
                        indexRange += addRange;
                        indexPrize *= addPrize;
                        maxCurrentprize = prizeMax * indexPrize;
                        random = Math.floor(Math.random() * (maxRange + indexRange + 1));
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                        if (confirm('Do you want to play again?')) {
                            totalPrize = 0;
                            maxCurrentprize = prizeMax;
                            attempts = 0;
                            random = Math.floor(Math.random() * (maxRange + 1));
                        } else {
                            break;
                        }
                      }
                } else {
                    attempts++;
                    maxCurrentprize /= prizeDivider;
                    if (attempts === maxAttempts) {
                        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                        if (confirm('Do you want to play again?')) {
                            totalPrize = 0;
                            maxCurrentprize = prizeMax;
                            attempts = 0;
                            random = Math.floor(Math.random() * (maxRange + 1));
                        } else {
                            break;
                        }
                    }
                }
            } else {
            break;
    }
}
} else {
    alert('You did not become a billionaire, but can.');
}

