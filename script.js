setInterval(run, 1000);


function run() {

    var secretNumber = 28;

    var stringGuess = prompt("Guess a Number!");
    var guess = Number(stringGuess);

    if(guess === secretNumber) {
        alert("YOU GOT IT RIGHT");
    }
    else if(guess > secretNumber) {
        alert(" TOO HIGH! PLEASE TRY TO GUESS AGAIN! ");
    }
    else {
        alert(" TOO LOW! GUESS AGAIN! ")
    }
}



