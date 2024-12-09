let balance = 100; 

function startGame() {
    let playAgain = true; 

    while (playAgain && balance >= 20) { 
        balance -= 20; 
        console.log("Starting game... $20 deducted from your balance."); 
        console.log(`New Balance: $${balance}`); 

        const randomNumber = Math.floor(Math.random() * 5) + 1; 
        let guessedCorrectly = false; 
        let attempts = 0; 

        while (attempts < 3 && !guessedCorrectly) { 
            let guess = prompt(`Current Balance: $${balance}. Guess a number between 1 and 5:`);
            guess = Number(guess); 
            attempts++; 

            if (guess === randomNumber) { 
                guessedCorrectly = true; 
                let reward; 
                if (attempts === 1) { 
                    reward = 40; 
                } else if (attempts === 2) { 
                    reward = 20; 
                } else { 
                    reward = 10; 
                }
                balance += reward; 
                alert(`Correct! You guessed it in ${attempts} attempt(s). You won $${reward}.`); 
                console.log(`New Balance: $${balance}`); 
            } else if (attempts < 3) {
                alert("Wrong guess! Try again."); 
            }
        }

        if (!guessedCorrectly) { 
            alert(`Sorry, you didn't guess the number. It was ${randomNumber}.`); 
        }


        if (balance >= 20) {
            playAgain = confirm("Do you want to play again? It will cost $20."); 
        } else { 
            alert("You don't have enough money to play again. Game over!"); 
            playAgain = false; 
        }
    }

    if (balance < 20) { 
        alert("You don't have enough money to play. Game over!"); 
    }
}

startGame(); 
