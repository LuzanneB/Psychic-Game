// computer selects random letter
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesleft = 9;


var winsText=document.getElementById("wins");
var lossesText=document.getElementById("losses");
var guessesText=document.getElementById("guessesleft");
var keyspressedText=document.getElementById("keyspressed");


// onkey, computer checks to see if input matches selcted letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("the computer picked "+ computerGuess);

document.onkeyup = function(event){ 

    var userGuess = event.key;
    console.log(event);


// // if guess matches computer:
if (userGuess === computerGuess){wins++;}
else {guessesleft--};
console.log(wins);
console.log(guessesleft);

//     // update wins to +1
winsText.textContent = wins;
//     // reset guesses left to 9
//     // reset keyspressed to empty
//     // computer to select new random letter
// // if it does not match:
//     // updated guesses left to minus 1
guessesText.textcontent = guessesleft;
//     // show letter guessed in "key pressed"

// // if guesses left reaches 0
//     // update losses to +1
lossesText.textContent = losses;
//     // reset guesses left to 0
//     // reset keys pressed to empty
//     // computer to select new random letter

}